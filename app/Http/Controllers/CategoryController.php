<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CategoryController extends Controller
{
    public function store(){
        // validate all the data from frontend
        $validator = Validator::make(request()->all(), [
            "category" => ["required"],
        ]);

        // condition for failed validation
        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors()->messages()
            ], 422);
        }

        // store the rest of the data
        $category = Category::create([
            'category' => request('category'),
        ]);

        // return when the data is successfully created.
        return response()->json([
            'message' => 'Category created successfully.',
            'category' => $category,
        ]);
    }

    public function index(){

        // take data from backend database
        $categories = Category::latest()->get();

        // send data to frontend
        return response()->json([
            'categories' => $categories
        ]);
    }
}
