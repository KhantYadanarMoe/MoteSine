<?php

namespace App\Http\Controllers;

use App\Mail\ContactReplyMail;
use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
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

    public function index(Request $request){
        $filter = $request->query('filter', 'all'); 
        $query = Contact::query();

        switch ($filter) {
            case 'new':
                $query->where('replied', false);
                break;
            case 'replied':
                $query->where('replied', true);
                break;
            case 'all':
            default:
                break;
        }

        $contacts = $query->latest()->get();

        return response()->json([
            'message' => 'Contact messages retrieved successfully.',
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

    public function mark(Request $request, $id){
        $contact = Contact::find($id);

        if (!$contact) {
            return response()->json(['message' => 'Contact not found'], 404);
        }

        $contact->marked = $request->marked; // Set marked to 1
        $contact->save();

        return response()->json(['message' => 'Contact marked successfully']);
    }

    public function delete(Contact $contact){
        $contact->delete();
        return response()->json([
            'message' => 'Contact message deleted successful!'
        ]);
    }

    public function replyToContact(Request $request, $id){
        $validator = Validator::make($request->all(), [
            'message' => ['required', 'string'],
        ]);
    
        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors()->messages()
            ], 422);
        }
    
        // find the contact
        $contact = Contact::find($id);
    
        if (!$contact) {
            return response()->json([
                'message' => 'Contact not found.'
            ], 404);
        }
    
        // send email
        Mail::to($contact->email)->send(new ContactReplyMail($request->message));
    
        // mark as replied
        $contact->replied = true;
        $contact->save();
    
        // return when the reply is successfully sent
        return response()->json([
            'message' => 'Reply sent successfully.',
            'contact' => $contact,
        ]);
    }
}
