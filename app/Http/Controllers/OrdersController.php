<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Product;
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
            "items.*.type" => ["required", "in:menu,product"],
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
            'user_id' => $user ? $user->id : null,
            'name' =>  request('name'),  
            'phone' => request('phone'),
            'email' => request('email'),
            'address' => request('address'),
            'date' => request('date'),
            'time' => request('time'),
            'note' => request('note'),
        ]);

        foreach (request('items') as $item) {
            if ($item['type'] === 'product') {
            $product = Product::find($item['id']);

            if (!$product) {
                return response()->json([
                    'message' => "Product not found (ID {$item['id']})."
                ], 400);
            }

            if ($product->stock < $item['quantity']) {
                return response()->json([
                    'message' => "Not enough stock for '{$product->name}'. Only {$product->stock} left."
                ], 400);
            }

            $product->decrement('stock', $item['quantity']);
        }
            $order->items()->create([
                'menu_id' => $item['type'] === 'menu' ? $item['id'] : null,
                'product_id' => $item['type'] === 'product' ? $item['id'] : null,
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

    public function index(Request $request){ 
         $filter = $request->query('filter', 'all'); 
         $query = Order::with('items'); 

        switch ($filter) {
            case 'new':
                $query->where('status', '!=', 'delivered');
                break;

            case 'delivered':
                $query->where('status', 'delivered');
                break;
            
            case 'cancelled':
                $query->where('status', 'cancelled');
                break;

            case 'all':
            default:
                break;
        }

        $orders = $query->latest()->get();

        return response()->json([
            'message' => 'Orders retrieved successfully.',
            'orders' => $orders
        ]);
    }

    public function orderDetails($id){
        $order = Order::with('items.menu', 'items.product')->find($id);

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
            ->with('items.menu', 'items.product')  // Eager load items and their associated menus
            ->latest()
            ->get();

        return response()->json([
            'orders' => $orders
        ]);
    }

    public function updateStatus(Request $request, $id){
        $order = Order::findOrFail($id);

        $validated = $request->validate([
            'status' => 'required|in:confirmed,processing,out for delivery,delivered,cancelled',
        ]);

        // Map internal status to human-readable status
        $statusMap = [
            'confirmed' => 'confirmed',
            'processing' => 'processing',
            "out for delivery" => 'out for delivery',
            'delivered' => 'delivered',
            'cancelled' => 'cancelled',
        ];

        $order->status = $statusMap[$validated['status']];
            $order->save();

        return response()->json(['success' => true, 'status' => $order->status]);
    }


}
