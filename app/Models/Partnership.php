<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Partnership extends Model
{
    protected $fillable = [
        'businessName', 'businessAddress', 'name', 'email', 'phone', 'social', 'type', 'certificate'
    ];
}
