<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    public function items(){
        return $this->hasMany(OrderItem::class);
    }

    protected $fillable = [
        'name', 'phone', 'email', 'address', 'date', 'time', 'note'
    ];
}
