<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class WishlistItem extends Model
{
    protected $fillable = [
        'user_id',
        'item_id',
        'item_type',
        'buy_or_not'
    ];

    public function menu(){
        return $this->belongsTo(Menu::class, 'item_id');
    }

    public function product(){
        return $this->belongsTo(Product::class, 'item_id');
    }
}
