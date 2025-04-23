<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'paragraph', 'visibility'];

    // A blog can have many images
    public function blogImages()
    {
        return $this->hasMany(BlogImage::class);  
    }
}

