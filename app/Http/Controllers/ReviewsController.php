<?php

namespace App\Http\Controllers;

use App\Models\Review;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ReviewsController extends Controller
{
    public function send(){
        // validate all the data from frontend
        $validator = Validator::make(request()->all(), [
            "rating" => ["required"],
            "name" => ["required"],
            "phone" => ["required"],
            "review" => ["string", "max:1000"],
        ]);

        // condition for failed validation
        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors()->messages()
            ], 422);
        }

        // store the rest of the data
        $reviews = Review::create([
            'rating' => request('rating'),
            'name' => request('name'),
            'phone' => request('phone'),
            'review' => request('review'),
        ]);

        // return when the data is successfully created.
        return response()->json([
            'message' => 'Review sent successfully.',
            'reviews' => $reviews,
        ]);
    }
}
