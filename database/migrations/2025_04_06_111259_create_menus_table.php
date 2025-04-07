<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('menus', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('category');
            $table->text('desc');  
            $table->decimal('price', 8, 2);
            $table->integer('promotion')->nullable();  // Allow promotion to be nullable
            $table->date('startDate')->nullable();  // Allow startDate to be nullable
            $table->date('endDate')->nullable();  // Allow endDate to be nullable
            $table->boolean('featured')->nullable();  // Allow featured to be nullable
            $table->boolean('visibility')->nullable();  // Allow visibility to be nullable
            $table->string('image')->nullable();  // Store image path
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('menus');
    }
};
