<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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

        // If the user is logged in, fetch user data
        $user = Auth::user();
        
        // Generate a unique order number (e.g., ORD-20230512-1234)
        $orderNumber = '#' . mt_rand(1000, 9999);

        $order = Order::create([
            'order_number' => $orderNumber, 
            'user_id' => $user->id,  
            'name' => $user ? $user->name : request('name'),  
            'phone' => request('phone'),
            'email' => $user ? $user->email : request('email'),
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

    public function index(){
        // Fetch all orders with their related order items
        $orders = Order::with('items')->latest()->get();

        return response()->json([
            'orders' => $orders
        ]);
    }

    public function orderDetails($id){
        $order = Order::with('items.menu')->find($id);; 

        // Check if order exists
        if ($order) {
            return response()->json(['order' => $order]);
        } else {
            // If order not found, return a 404 with a message
            return response()->json(['message' => 'Order not found'], 404);
        }
    }

    public function userOrders(){
        $user = Auth::user();  // Get the logged-in user

        // Check if the user exists (just to be safe)
        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }

        // Eager load 'items' and related 'menu' for the user's orders
        /** @var \App\Models\User $user */
        $orders = $user->orders()
            ->with('items.menu')  // Eager load items and their associated menus
            ->latest()
            ->get();

        return response()->json([
            'orders' => $orders
        ]);
    }

}
