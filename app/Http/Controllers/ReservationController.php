<?php

namespace App\Http\Controllers;

use App\Models\Reservation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class ReservationController extends Controller
{
    public function checkAvailability(){
        $validator = Validator::make(request()->all(), [
                "guest" => ["required"],
                "date" => ["required", 'date'],
                "time" => ["required", 'string'],
            ]);
        // condition for failed validation
        if ($validator->fails()) {
            return response()->json([
                'available' => false,
                'errors' => $validator->errors()->messages()
            ], 422);
        }

        $guest = request('guest');
        $date = request('date');
        $time = request('time');

        $existing = Reservation::where('date', $date)
            ->where('time', $time)
            ->where('guest', $guest)
            ->exists();

        if ($existing) {
            return response()->json([
                'available' => false,
                'message' => 'Reservation for the time you preferred is full! We are sorry!',
            ]);
        }

        return response()->json([
            'available' => true,
            'message' => 'The table for your reservation is available. Please fill the reservation form!',
        ]);
    }

    public function reserve(){
        // validate all the data from frontend
        $validator = Validator::make(request()->all(), [
            "firstName" => ["required"],
            "lastName" => ["required"],
            "guest" => ["required"],
            "date" => ["required", 'date'],
            "time" => ["required", 'string'],
            "email" => ["required"],
            "phone" => ["required"],
            "message" => ["nullable", "max:1000"],
        ]);

        // condition for failed validation
        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors()->messages()
            ], 422);
        }

        $existing = Reservation::where('date', request('date'))
        ->where('time', request('time'))
        ->where('guest', request('guest'))
        ->exists();

        if ($existing) {
            return response()->json([
                'message' => 'Reservation for the selected time and guest count is already full. Please choose another time.',
            ], 409);
        }

        // Generate a unique order number (e.g., ORD-20230512-1234)
        $reservationID = '#' . mt_rand(1000, 9999);

        $approvalType = DB::table('reservation_settings')->value('type') ?? 'Manual Approve';

        $status = ($approvalType === 'Auto Approve') ? 'Confirmed' : 'Pending';

        // Define available tables by capacity
        $tableMap = [
            1 => ['1A', '1B'],
            2 => ['2A', '2B', '2C', '2D', '2E', '2F'],
            3 => ['3A', '3B', '3C', '3D', '3E', '3F'],
            4 => ['4A', '4B', '4C', '4D', '4E', '4F'],
            5 => ['5A', '5B', '5C', '5D', '5E', '5F'],
            6 => ['6A', '6B', '6C', '6D', '6E', '6F'],
            7 => ['7A', '7B', '7C', '7D', '7E'],
            8 => ['8A', '8B', '8C', '8D'],
            9 => ['9A', '9B', '9C'],
            10 => ['10A', '10B'],
        ];

        $guestCount = request('guest');

        // Choose table based on guest count
        $availableTables = $tableMap[$guestCount] ?? null;

        if (!$availableTables) {
            return response()->json([
                'message' => "No table available for $guestCount guests."
            ], 422);
        }

        $assignedTable = $availableTables[array_rand($availableTables)];

        $user = Auth::user();

        // store the rest of the data
        $reservation = Reservation::create([
            'user_id' => $user ? $user->id : null,
            'firstName' => request('firstName'),
            'lastName' => request('lastName'),
            'guest' => request('guest'),
            'date' => request('date'),
            'time' => request('time'),
            'email' => request('email'),
            'phone' => request('phone'),
            'reservation_code' => $reservationID, 
            'table_no' => $assignedTable,
            'message' => request('message'),
            'status' => $status,
        ]);

        // return when the data is successfully created.
        return response()->json([
            'message' => 'Reserved successfully.',
            'reservation' => $reservation,
        ]);
    }

    public function index(){
        // take data from backend database
        $reservations = Reservation::with('user')->latest()->get();

        // send data to frontend
        return response()->json([
            'reservations' => $reservations
        ]);
    }

    public function userReservations(){
        $user = Auth::user();  

        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }

        /** @var \App\Models\User $user */
        $reservations = $user->reservations()
        ->with('user')
            ->latest()
            ->get();

        return response()->json([
            'reservations' => $reservations
        ]);
    }

   public function updateStatus(Request $request, $id){
        $reservation = Reservation::findOrFail($id);

        $validated = $request->validate([
            'status' => 'required|in:Pending,Confirmed,Reserved,Canceled',
        ]);

        // Map internal status to human-readable status
        $statusMap = [
            'Pending' => 'Pending',
            'Confirmed' => 'Confirmed',
            "Reserved" => 'Reserved',
            'Canceled' => 'Canceled',
        ];

        // Set the human-readable status
        $reservation->status = $statusMap[$validated['status']];
            $reservation->save();

            return response()->json(['success' => true, 'status' => $reservation->status]);
    }


    public function getByDate($date){
        $reservations = Reservation::whereDate('date', $date)->get();

        return response()->json($reservations);
    }


}
