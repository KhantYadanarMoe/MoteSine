<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Menu;
use Illuminate\Support\Facades\Log;

class MenuController extends Controller
{
    public function store(){
        // validate all the data from frontend
        $validator = Validator::make(request()->all(), [
            "title" => ["required"],
            "category_id" => ["required"],
            "desc" => ["required"],
            "price" => ["required"],
            "promotion" => ["nullable", "numeric"],
            "startDate" => ["nullable", "date"],
            "endDate" => ["nullable", "date"],
            'featured' => ['nullable', 'boolean'],  
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
            $imagePath = $image->storeAs('menus', $imageName, 'public'); 
        }

        // store the rest of the data
        $menus = Menu::create([
            'title' => request('title'),
            'category_id' => request('category_id'),
            'desc' => request('desc'),
            'price' => request('price'),
            'promotion' => request('promotion'),
            'startDate' => request('startDate'),
            'endDate' => request('endDate'),
            'featured' => request('featured'),
            'visibility' => request('visibility'),
            'image' => $imagePath, // Save image path if any
        ]);

        // return when the data is successfully created.
        return response()->json([
            'message' => 'Menu created successfully.',
            'menus' => $menus,
            'image_url' => $imagePath ? asset('storage/' . $imagePath) : null
        ]);
    }

    public function index(){

        // take data from backend database
        $menus = Menu::with('category')->latest()->get();

        // send data to frontend
        return response()->json([
            'menus' => $menus
        ]);
    }

    public function show($id){
        $menu = Menu::with('category')->find($id); // Find menu by ID

        // Check if menu exists
        if ($menu) {
            return response()->json(['menu' => $menu]);
        } else {
            // If menu not found, return a 404 with a message
            return response()->json(['message' => 'Menu not found'], 404);
        }
    }

    public function update(Menu $menu){
        $validator = Validator::make(request()->all(), [
            "title" => ["required"],
            "category_id" => ["required"],
            "desc" => ["required"],
            "price" => ["required"],
            "promotion" => ["nullable", "numeric"],
            "startDate" => ["nullable", "date"],
            "endDate" => ["nullable", "date"],
            'featured' => ['nullable', 'boolean'],  
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
            $imagePath = $image->storeAs('menus', $imageName, 'public'); 
        }else {
            // Retain the old image if no new image is provided
            $imagePath = $menu->image;
        }

        Log::info(request()->all()); // Log all incoming data


        $menu->update([
            'title' => request('title'),
            'category_id' => request('category_id'),
            'desc' => request('desc'),
            'price' => request('price'),
            'promotion' => request('promotion'),
            'startDate' => request('startDate'),
            'endDate' => request('endDate'),
            'featured' => request('featured'),
            'visibility' => request('visibility'),
            'image' => $imagePath, // Save image path if any
        ]);
        return response()->json([
            'message' => 'Menu updated successfully.',
            'menu' => $menu
        ]);
    }

    public function delete(Menu $menu){
        $menu->delete();
        return response()->json([
            'message' => 'Menu deleted successful!'
        ]);
    }
}
