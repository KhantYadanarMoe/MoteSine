<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OrderItem extends Model
{
    public function order(){
        return $this->belongsTo(Order::class);
    }

    public function menu(){
        return $this->belongsTo(Menu::class);  
    }

     public function product(){
        return $this->belongsTo(Product::class); 
    }

    protected $fillable = [
        'order_id',
        'menu_id',
        'product_id',
        'quantity',
        'price',
        'title'
    ];
}
