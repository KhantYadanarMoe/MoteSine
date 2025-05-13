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

    protected $fillable = [
        'order_number', 'user_id', 'name', 'phone', 'email', 'address', 'date', 'time', 'note'
    ];
}
