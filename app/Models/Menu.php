<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    protected $fillable = [
        'title', 'category', 'desc', 'price', 'promotion', 'startDate', 'endDate', 'featured', 'visibility', 'image'
    ];
}
