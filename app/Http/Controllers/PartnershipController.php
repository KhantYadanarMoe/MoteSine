<?php

namespace App\Http\Controllers;

use App\Models\Partnership;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PartnershipController extends Controller
{
    public function send(){
        // validate all the data from frontend
        $validator = Validator::make(request()->all(), [
            "businessName" => ["required"],
            "businessAddress" => ["required"],
            "name" => ["required"],
            "email" => ["required"],
            "phone" => ["required"],
            "social" => ["nullable"],
            "type" => ["required"],
            "certificate" => ["nullable"],
        ]);

        // condition for failed validation
        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors()->messages()
            ], 422);
        }

        $certificatePath = null;
        if (request()->hasFile('certificate')) {
            $certificatePath = request()->file('certificate')->store('certificates', 'public');
        }

        // store the rest of the data
        $partnership = Partnership::create([
            'businessName' => request('businessName'),
            'businessAddress' => request('businessAddress'),
            'name' => request('name'),
            'email' => request('email'),
            'phone' => request('phone'),
            'social' => request('social'),
            'type' => request('type'),
            'certificate' => $certificatePath,
        ]);

        // return when the data is successfully created.
        return response()->json([
            'message' => 'Partnership application sent successfully.',
            'partnership' => $partnership,
        ]);
    }

    public function index(){

        // take data from backend database
        $partnerships = Partnership::latest()->get();

        // send data to frontend
        return response()->json([
            'partnerships' => $partnerships
        ]);
    }

    public function delete(Partnership $partnership){
        $partnership->delete();
        return response()->json([
            'message' => 'Partnership application deleted successful!'
        ]);
    }

    public function updateStatus(Request $request, $id){
        $partnership = Partnership::find($id);

        if (!$partnership) {
            return response()->json(['message' => 'Partnership not found'], 404);
        }

        $partnership->status = $request->status; // 'approved' or 'rejected'
        $partnership->save();

        return response()->json(['message' => 'Status updated successfully']);
    }
}
