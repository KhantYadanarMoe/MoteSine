<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class OrdersController extends Controller
{
    public function order(){
        $validator = Validator::make(request()->all(), [
            "name" => ["required"],
            "phone" => ["required"],
            "email" => ["required"],
            "address" => ["required"],
            "date" => ["nullable", "date"],
            "time" => ["nullable", "string"], 
            "note" => ["nullable", "string"],
            "items" => ["required", "array", "min:1"],
            "items.*.id" => ["required", "integer"], 
            "items.*.title" => ["required", "string"],
            "items.*.price" => ["required", "numeric"],
            "items.*.quantity" => ["required", "integer", "min:1"],
        ]);

        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors()->messages()
            ], 422);
        }

        $order = Order::create([
            'name' => request('name'),
            'phone' => request('phone'),
            'email' => request('email'),
            'address' => request('address'),
            'date' => request('date'),
            'time' => request('time'),
            'note' => request('note'),
        ]);

        foreach (request('items') as $item) {
            $order->items()->create([
                'menu_id' => $item['id'],
                'title' => $item['title'],
                'price' => $item['price'],
                'quantity' => $item['quantity'],
            ]);
        }

        return response()->json([
            'message' => 'Order created successfully.',
            'order' => $order->load('items'), 
        ]);
    }

}
