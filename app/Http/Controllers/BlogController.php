<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\BlogImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class BlogController extends Controller
{
    public function store(){
        // Validate all the data from frontend
        $validator = Validator::make(request()->all(), [
            "title" => ["required"],
            "paragraph" => ["required"],
            'visibility' => ['nullable', 'boolean'], 
            "image" => ["nullable", "image", "mimes:jpeg,png,jpg,gif,svg", "max:2048"],
        ]);
    
        // Condition for failed validation
        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors()->messages()
            ], 422);
        }
    
    
        $imagePath = null;
        if (request()->hasFile('image')) {
            $image = request()->file('image');
            $imageName = time() . '_' . $image->getClientOriginalName();
            $imagePath = $image->storeAs('blogs', $imageName, 'public');
        }

        // Store blog data
        $blog = Blog::create([
            'title' => request('title'),
            'paragraph' => request('paragraph'),
            'visibility' => request('visibility'),
            'image' => $imagePath,
        ]);
    
    
        // Return response
        return response()->json([
            'message' => 'Blog created successfully.',
            'blog' => $blog,
            'image_url' => $imagePath ? asset('storage/' . $imagePath) : null

        ]);
    }
    
    public function index(){
        // take data from backend database
        $blogs = Blog::latest()->get();

        // send data to frontend
        return response()->json([
            'blogs' => $blogs
        ]);
    }

    public function show($id){
        $blog = Blog::findOrFail($id); // Find blog by ID

        // Check if blog exists
        if ($blog) {
            return response()->json(['blog' => $blog]);
        } else {
            // If blog not found, return a 404 with a message
            return response()->json(['message' => 'Blog not found'], 404);
        }
    }

    public function update(Blog $blog){
        $validator = Validator::make(request()->all(), [
            "title" => ["required"],
            "paragraph" => ["required"],
            'visibility' => ['nullable', 'boolean'], 
            "image" => ["nullable", "image", "mimes:jpeg,png,jpg,gif,svg", "max:2048"],
        ]);

        // condition for failed validation
        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors()->messages()
            ], 422);
        }

        // Store new images if they exist
        $imagePath = $blog->image;

        if (request()->hasFile('image')) {
            // Optional: delete old image
            if ($imagePath && Storage::disk('public')->exists($imagePath)) {
                Storage::disk('public')->delete($imagePath);
            }

            $image = request()->file('image');
            $imageName = time() . '_' . $image->getClientOriginalName();
            $imagePath = $image->storeAs('blogs', $imageName, 'public');
        }

        $blog->update([
            'title' => request('title'),
            'paragraph' => request('paragraph'),
            'visibility' => request('visibility'),
            'image' => $imagePath,
        ]);

        return response()->json([
            'message' => 'Blog updated successfully.',
            'blog' => $blog,
            'image_url' => $imagePath ? asset('storage/' . $imagePath) : null
        ]);
    }

    public function incrementView($id){
        $blog = Blog::find($id);

        if ($blog) {
            $blog->increment('view');
            return response()->json(['success' => true]);
        }

        return response()->json(['success' => false, 'message' => 'Blog not found'], 404);
    }

    public function delete(Blog $blog){
        $blog->delete();
        return response()->json([
            'message' => 'Blog deleted successful!'
        ]);
    }
}
