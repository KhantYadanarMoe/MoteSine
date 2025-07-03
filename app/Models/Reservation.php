<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    protected $fillable = [
        'user_id', 'firstName', 'lastName', 'guest', 'date', 'time', 'email', 'phone', 'reservation_code', 'table_no', 'message', 'status'
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }
}
