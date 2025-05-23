<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ReservationSetting extends Model
{
    protected $fillable = [
        'maxGuests', 'type', 'allow'
    ];
}
