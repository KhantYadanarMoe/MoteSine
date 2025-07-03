<?php

namespace App\Http\Controllers;

use App\Models\WishlistItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class WishlistController extends Controller
{
    public function toggle(Request $request){
        $validator = Validator::make($request->all(), [
                "items" => ["required", "array", "min:1"],
                "items.*.id" => ["required", "integer"],
                "items.*.type" => ["required", "in:menu,product"],
            ]);

            if ($validator->fails()) {
                return response()->json([
                    'errors' => $validator->errors()->messages()
                ], 422);
            }

            $user = Auth::user();

            if (!$user) {
                return response()->json([
                    'message' => 'Authentication required.'
                ], 401);
            }

            $savedItems = [];

            foreach ($request->items as $item) {
                $wishlistItem = WishlistItem::where([
                    'user_id' => $user->id,
                    'item_id' => $item['id'],
                    'item_type' => $item['type'],
                ])->first();

                if ($wishlistItem) {
                    $wishlistItem->delete();
                } else {
                    $wishlistItem = WishlistItem::create([
                        'user_id' => $user->id,
                        'item_id' => $item['id'],
                        'item_type' => $item['type'],
                    ]);
                    $savedItems[] = $wishlistItem;
                }
            }

            return response()->json([
                'message' => 'Wishlist updated successfully.',
                'wishlist' => $savedItems,
            ]);
    }

    public function index(Request $request){
        $userId = Auth::id();
        $filter = $request->query('filter', 'menu');

        $query = WishlistItem::where('user_id', $userId)
            ->with(['menu', 'product']);

        if ($filter === 'menu') {
            $query->where('item_type', 'menu');
        } elseif ($filter === 'product') {
            $query->where('item_type', 'product');
        }

        $wishlistItems = $query->get();

        return response()->json([
            'items' => $wishlistItems,
        ]);
    }


}
