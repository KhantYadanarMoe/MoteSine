<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OrderSetting extends Model
{
    protected $fillable = [
        'deliveryFee', 'minOrder', 'type', 'allow'
    ];
}
