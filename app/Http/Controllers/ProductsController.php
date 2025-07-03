<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class ProductsController extends Controller
{
    public function store(){
        // validate all the data from frontend
        $validator = Validator::make(request()->all(), [
            "name" => ["required"],
            "price" => ["required"],
            "rating" => ["required", "numeric"],
            "stock" => ["required", "numeric"],
            "promotion" => ["nullable", "numeric"],
            "startDate" => ["nullable", "date"],
            "endDate" => ["nullable", "date"], 
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
        $products = Product::create([
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

    public function index(){
        // take data from backend database
        $products = Product::latest()->get();

        // send data to frontend
        return response()->json([
            'products' => $products
        ]);
    }

    public function show($id){
        $product = Product::find($id); // Find product by ID

        // Check if product exists
        if ($product) {
            return response()->json(['product' => $product]);
        } else {
            // If product not found, return a 404 with a message
            return response()->json(['message' => 'Product not found'], 404);
        }
    }

    public function update(Product $product){
        $validator = Validator::make(request()->all(), [
            "name" => ["required"],
            "price" => ["required"],
            "rating" => ["required", "numeric"],
            "stock" => ["required", "numeric"],
            "promotion" => ["nullable", "numeric"],
            "startDate" => ["nullable", "date"],
            "endDate" => ["nullable", "date"], 
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
        }else {
            // Retain the old image if no new image is provided
            $imagePath = $product->image;
        }

        Log::info(request()->all()); // Log all incoming data


        $product->update([
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
        return response()->json([
            'message' => 'Product updated successfully.',
            'product' => $product
        ]);
    }

    public function delete(Product $product){
        $product->delete();
        return response()->json([
            'message' => 'Product deleted successful!'
        ]);
    }
}
