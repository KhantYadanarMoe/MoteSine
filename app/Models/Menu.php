<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    protected $fillable = [
        'title', 'category_id', 'desc', 'price', 'promotion', 'startDate', 'endDate', 'featured', 'visibility', 'image'
    ];

    public function category(){
        return $this->belongsTo(Category::class);
    }


    public function orderItems(){
        return $this->hasMany(OrderItem::class);  
    }
}
