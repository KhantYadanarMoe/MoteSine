<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    protected $fillable = [
        'firstName', 'lastName', 'guest', 'date', 'time', 'email', 'phone', 'reservation_code', 'table_no', 'message'
    ];
}
