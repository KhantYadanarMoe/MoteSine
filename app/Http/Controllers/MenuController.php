<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Helpers\ErrorJsonChanger;
use App\Models\Menu;

class MenuController extends Controller
{
    use ErrorJsonChanger;
    public function store(){
        $validator = Validator::make(request()->all(), [
            "title" => ["required"],
            "category" => ["required"],
            "desc" => ["required"],
            "price" => ["required"],
            "promotion" => ["nullable", "numeric"],
            "startDate" => ["nullable", "date"],
            "endDate" => ["nullable", "date"],
            'featured' => ['nullable', 'boolean'],  
            'visibility' => ['nullable', 'boolean'], 
            "image" => ["nullable", "image", "mimes:jpeg,png,jpg,gif,svg", "max:2048"],
        ]);


        if ($validator->fails()) {
            return response()->json([
                // 'message' => 'The given data was invalid.',
                'errors' => $validator->errors()->messages()
            ], 422);
        }

        $imagePath = null;
        if (request()->hasFile('image')) {
            $image = request()->file('image');
            $imageName = time() . '_' . $image->getClientOriginalName();
            $imagePath = $image->storeAs('menus', $imageName, 'public'); // saved in storage/app/public/products
        }

        $product = Menu::create([
            'title' => request('title'),
            'category' => request('category'),
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
            'message' => 'Product created successfully.',
            'product' => $product,
            'image_url' => $imagePath ? asset('storage/' . $imagePath) : null
        ]);
    }

    public function index(){
    // $menus = Menu::with('category', 'images')
    //     ->where("name", "like", "%" . request('name') . "%")
    //     ->get();

    $menus = Menu::latest()->get();

    return response()->json([
        'menus' => $menus
    ]);
}

}
