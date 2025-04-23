<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\BlogImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class BlogController extends Controller
{
    public function store(){
        // Validate all the data from frontend
        $validator = Validator::make(request()->all(), [
            "title" => ["required"],
            "paragraph" => ["required"],
            'visibility' => ['nullable', 'boolean'], 
            "images" => ["nullable", "array", "max:3"],  // Validate array of images (up to 3)
            "images.*" => ["image", "mimes:jpeg,png,jpg,gif,svg", "max:2048"],  // Validate individual image files
        ]);
    
        // Condition for failed validation
        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors()->messages()
            ], 422);
        }
    
        // Store blog data
        $blog = Blog::create([
            'title' => request('title'),
            'paragraph' => request('paragraph'),
            'visibility' => request('visibility'),
        ]);
    
        // Store images if they exist
        $imagePaths = [];
        if (request()->hasFile('images')) {
            foreach (request()->file('images') as $image) {
                $imageName = time() . '_' . $image->getClientOriginalName();
                $imagePath = $image->storeAs('blogs', $imageName, 'public');
                $imagePaths[] = $imagePath;  // Store the image paths in an array
            }
        }
    
        // Store image paths in the blog_images table (if any images were uploaded)
        foreach ($imagePaths as $path) {
            BlogImage::create([
                'blog_id' => $blog->id,
                'url' => $path,
            ]);
        }
    
        // Return response
        return response()->json([
            'message' => 'Blog created successfully.',
            'blog' => $blog,
            'image_urls' => array_map(fn($path) => asset('storage/' . $path), $imagePaths)
        ]);
    }
    
    public function index(){
        // take data from backend database
        $blogs = Blog::with('blogImages')->latest()->get();

        // send data to frontend
        return response()->json([
            'blogs' => $blogs
        ]);
    }
}
