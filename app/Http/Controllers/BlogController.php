<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class BlogController extends Controller
{
    public function store(){
        // validate all the data from frontend
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

        // store image
        $imagePath = null;
        if (request()->hasFile('image')) {
            $image = request()->file('image');
            $imageName = time() . '_' . $image->getClientOriginalName();
            $imagePath = $image->storeAs('products', $imageName, 'public'); 
        }

        // store the rest of the data
        $products = Blog::create([
            'name' => request('name'),
            'price' => request('price'),
            'rating' => request('rating'),
            'stock' => request('stock'),
            'promotion' => request('promotion'),
            'startDate' => request('startDate'),
            'endDate' => request('endDate'),
            'visibility' => request('visibility'),
            'image' => $imagePath, // Save image path if any
        ]);

        // return when the data is successfully created.
        return response()->json([
            'message' => 'Product created successfully.',
            'products' => $products,
            'image_url' => $imagePath ? asset('storage/' . $imagePath) : null
        ]);
    }
}
