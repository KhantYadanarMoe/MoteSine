<?php

namespace App\Http\Controllers;

use App\Models\Job;
use App\Models\JobApplication;
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

    public function delete(JobPost $job){
        $job->delete();
        return response()->json([
            'message' => 'Job post deleted successful!'
        ]);
    }

    public function apply(){
        $validator = Validator::make(request()->all(), [
            "firstName" => ["required"],
            "lastName" => ["required"],
            "email" => ["required"],
            "phone" => ["required"],
            "position" => ["required"],
            "resume" => ["required"],
        ]);

        // condition for failed validation
        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors()->messages()
            ], 422);
        }

        $resume = null;
        if (request()->hasFile('resume')) {
            $resume = request()->file('resume')->store('resumes', 'public');
        }

        // store the rest of the data
        $jobApplications = JobApplication::create([
            'firstName' => request('firstName'),
            'lastName' => request('lastName'),
            'email' => request('email'),
            'phone' => request('phone'),
            'position' => request('position'),
            'resume' => $resume,
        ]);

        // return when the data is successfully created.
        return response()->json([
            'message' => 'Job application sent successfully.',
            'jobApplications' => $jobApplications,
        ]);
    }

    public function showApplications(){

        // take data from backend database
        $applications = JobApplication::latest()->get();

        // send data to frontend
        return response()->json([
            'applications' => $applications
        ]);
    }

    public function checked(Request $request, $id){
        $application = JobApplication::find($id);

        if (!$application) {
            return response()->json(['message' => 'Application not found'], 404);
        }

        $application->checked = $request->checked; // Set checked to 1
        $application->save();

        return response()->json(['message' => 'application marked successfully']);
    }

    public function deleteApplication(JobApplication $application){
        $application->delete();
        return response()->json([
            'message' => 'Job application deleted successful!'
        ]);
    }
}
