<?php

namespace App\Http\Controllers;

use App\Models\Reservation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ReservationController extends Controller
{
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
            "message" => ["string", "max:1000"],
        ]);

        // condition for failed validation
        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors()->messages()
            ], 422);
        }

        // store the rest of the data
        $reservation = Reservation::create([
            'firstName' => request('firstName'),
            'lastName' => request('lastName'),
            'guest' => request('guest'),
            'date' => request('date'),
            'time' => request('time'),
            'email' => request('email'),
            'phone' => request('phone'),
            'message' => request('message'),
        ]);

        // return when the data is successfully created.
        return response()->json([
            'message' => 'Reserved successfully.',
            'reservation' => $reservation,
        ]);
    }
}
