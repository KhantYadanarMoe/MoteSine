<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    public function send(){
        // validate all the data from frontend
        $validator = Validator::make(request()->all(), [
            "name" => ["required"],
            "phone" => ["required"],
            "email" => ["required"],
            "message" => ["string", "max:1000"],
        ]);

        // condition for failed validation
        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors()->messages()
            ], 422);
        }

        // store the rest of the data
        $contact = Contact::create([
            'name' => request('name'),
            'phone' => request('phone'),
            'email' => request('email'),
            'message' => request('message'),
        ]);

        // return when the data is successfully created.
        return response()->json([
            'message' => 'Contact message sent successfully.',
            'contact' => $contact,
        ]);
    }

    public function index(){

        // take data from backend database
        $contacts = Contact::latest()->get();

        // send data to frontend
        return response()->json([
            'contacts' => $contacts
        ]);
    }

    public function show($id){
        $contact = Contact::find($id); // Find contact by ID

        // Check if contact exists
        if ($contact) {
            return response()->json(['contact' => $contact]);
        } else {
            // If contact not found, return a 404 with a message
            return response()->json(['message' => 'Contact message not found'], 404);
        }
    }

    public function mark($id){
        $contact = Contact::find($id);

        if (!$contact) {
            return response()->json(['message' => 'Contact not found'], 404);
        }

        $contact->marked = true; // Set marked to 1
        $contact->save();

        return response()->json(['message' => 'Contact marked successfully']);
    }

}
