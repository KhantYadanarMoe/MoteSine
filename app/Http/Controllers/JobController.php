<?php

namespace App\Http\Controllers;

use App\Models\Job;
use App\Models\JobPost;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
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

    public function index(){

        // take data from backend database
        $jobs = JobPost::latest()->get();

        // send data to frontend
        return response()->json([
            'jobs' => $jobs
        ]);
    }

    public function show($id){
        $job = JobPost::find($id); // Find job by ID

        // Check if job exists
        if ($job) {
            return response()->json(['job' => $job]);
        } else {
            // If menu not found, return a 404 with a message
            return response()->json(['message' => 'Job post not found'], 404);
        }
    }

    public function update(JobPost $job){
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

        Log::info(request()->all()); // Log all incoming data

        $job->update([
            'title' => request('title'),
            'desc' => request('desc'),
            'salary' => request('salary'),
            'type' => request('type')
        ]);
        return response()->json([
            'message' => 'Job post updated successfully.',
            'job' => $job
        ]);
    }
}
