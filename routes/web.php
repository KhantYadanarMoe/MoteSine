<?php

use App\Http\Controllers\BlogController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

Route::get('/{any}', function () {
    return view('app');
})->where('any', '^(?!api).*');

Route::get('/api/menus', [MenuController::class, 'index']);
Route::post("/api/menu/create", [MenuController::class, 'store']);
Route::get('/api/menu/{id}', [MenuController::class, 'show']);  
Route::put('/api/menu/{menu}', [MenuController::class, 'update']);
Route::delete('/api/menu/{menu}', [MenuController::class, 'delete']);

Route::get('/api/categories', [CategoryController::class, 'index']);
Route::post("/api/category/create", [CategoryController::class, 'store']);
Route::get('/api/category/{id}', [CategoryController::class, 'show']);
Route::put('/api/category/{category}', [CategoryController::class, 'update']);
Route::delete('/api/category/{category}', [CategoryController::class, 'delete']);

Route::get('/api/products', [ProductsController::class, 'index']);
Route::post("/api/product/create", [ProductsController::class, 'store']);
Route::get('/api/product/{id}', [ProductsController::class, 'show']);
Route::put('/api/product/{product}', [ProductsController::class, 'update']);
Route::delete('/api/product/{product}', [ProductsController::class, 'delete']);

Route::get('/api/blogs', [BlogController::class, 'index']);
Route::post("/api/blog/create", [BlogController::class, 'store']);