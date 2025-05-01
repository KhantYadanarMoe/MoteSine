<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class JobApplication extends Model
{
    protected $fillable = ['firstName', 'lastName', 'email', 'phone', 'position', 'resume'];
}
