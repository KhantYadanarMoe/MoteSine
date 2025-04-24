<?php

namespace App\Http\Controllers;

use App\Models\Job;
use App\Models\JobPost;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class JobController extends Controller
{
    public function store(){
        // validate all the data from frontend
        $validator = Validator::make(request()->all(), [
            "title" => ["required"],
            "desc" => ["required"],
            "salary" => ["required"],
            "type" => ["required"],
        ]);

        // condition for failed validation
        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors()->messages()
            ], 422);
        }

        // store the rest of the data
        $jobs = JobPost::create([
            'title' => request('title'),
            'desc' => request('desc'),
            'salary' => request('salary'),
            'type' => request('type')
        ]);

        // return when the data is successfully created.
        return response()->json([
            'message' => 'Job post created successfully.',
            'jobs' => $jobs,
        ]);
    }
}
