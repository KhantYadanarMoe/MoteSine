<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'name', 'price', 'rating', 'stock', 'promotion', 'startDate', 'endDate', 'visibility', 'image'
    ];
}
