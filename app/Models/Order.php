<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
     public function user(){
        return $this->belongsTo(User::class);
    }

    public function items(){
        return $this->hasMany(OrderItem::class);
    }

//     public function menuItems(){
//     return $this->items()->whereNotNull('menu_id');
// }

// // Optional: get only product items in this order
// public function productItems()
// {
//     return $this->items()->whereNotNull('product_id');
// }

    protected $fillable = [
        'order_number', 'user_id', 'name', 'phone', 'email', 'address', 'date', 'time', 'note'
    ];
}
