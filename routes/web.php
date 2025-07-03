<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\GeneralSettingController;
use App\Http\Controllers\HeroSettingController;
use App\Http\Controllers\JobController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\OrdersController;
use App\Http\Controllers\OrderSettingController;
use App\Http\Controllers\PartnershipController;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ReservationController;
use App\Http\Controllers\ReservationSettingController;
use App\Http\Controllers\ReviewsController;
use App\Http\Controllers\WishlistController;
use App\Http\Middleware\IsAdmin;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
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

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

Route::middleware('guest')->get('auth/google', [AuthController::class, 'redirectToGoogle']);
Route::middleware('guest')->get('auth/google/callback', [AuthController::class, 'handleGoogleCallback']);

Route::get('/{any}', function () {
    return view('app');
})->where('any', '^(?!api).*');

Route::post('/api/wishlist/toggle', [WishlistController::class, 'toggle']);
Route::get('/api/wishlist', [WishlistController::class, 'index']);

Route::get('/api/menus', [MenuController::class, 'index']);
Route::get('/api/menu/{id}', [MenuController::class, 'show']); 

Route::get('/api/categories', [CategoryController::class, 'index']);
Route::get('/api/category/{id}', [CategoryController::class, 'show']);

Route::get('/api/products', [ProductsController::class, 'index']);
Route::get('/api/product/{id}', [ProductsController::class, 'show']);

Route::post("/api/orders/create", [OrdersController::class, 'order']);
Route::get('/api/orders', [OrdersController::class, 'index']);
Route::get('/api/order/{id}', [OrdersController::class, 'orderDetails']);
Route::get('/api/user/orders', [OrdersController::class, 'userOrders']);

Route::post('/check-availability', [ReservationController::class, 'checkAvailability']);
Route::post("/reserve", [ReservationController::class, 'reserve']);
Route::get('/api/reservations', [ReservationController::class, 'index']);
Route::get('/api/user/reservations', [ReservationController::class, 'userReservations']);
Route::get('/api/reservations/by-date/{date}', [ReservationController::class, 'getByDate']);

Route::get('/api/users', [AuthController::class, 'index']);
Route::middleware('auth:sanctum')->put('/api/user/{user}', [AuthController::class, 'updateUser']);
Route::middleware('auth:sanctum')->put('/api/user/{user}/changePassword', [AuthController::class, 'changePassword']);
Route::delete('/api/user/{user}', [AuthController::class, 'delete']);

Route::get('/api/blogs', [BlogController::class, 'index']);
Route::get('/api/blog/{id}', [BlogController::class, 'show']);
Route::post('/api/blog/{id}/view', [BlogController::class, 'incrementView']);

Route::get('/api/reviews', [ReviewsController::class, 'index']);
Route::post("/api/review/create", [ReviewsController::class, 'send']);

Route::get('/api/contacts', [ContactController::class, 'index']);
Route::post("contact/send", [ContactController::class, 'send']);
Route::get('/api/contacts/{id}', [ContactController::class, 'show']);

Route::get('/api/jobs', [JobController::class, 'index']);
Route::get('/api/job/{id}', [JobController::class, 'show']);

Route::post('/jobs/apply', [JobController::class, 'apply']);
Route::get('/api/jobs/applications', [JobController::class, 'showApplications']);

Route::post("/partnership/send", [PartnershipController::class, 'send']);
Route::get('/api/partnership', [partnershipController::class, 'index']);

Route::post('/api/login', [AuthController::class, 'login']);
Route::post('/api/register', [AuthController::class, 'register']);
Route::middleware('auth:sanctum')->get('/api/user', fn(Request $req) => $req->user());
Route::post('/api/logout', [AuthController::class, 'logout']);

Route::get('/api/setting/general', [GeneralSettingController::class, 'getSetting']);

Route::get('/api/setting/reservation', [ReservationSettingController::class, 'getSetting']);

Route::get('/api/setting/order', [OrderSettingController::class, 'getSetting']);

Route::get('/api/setting/hero', [HeroSettingController::class, 'getSetting']);

Route::middleware(['auth:sanctum', IsAdmin::class])->group(function () {
    Route::post("/api/menu/create", [MenuController::class, 'store']);
    Route::put('/api/menu/{menu}', [MenuController::class, 'update']);
    Route::delete('/api/menu/{menu}', [MenuController::class, 'delete']);
    
    Route::post("/api/category/create", [CategoryController::class, 'store']);
    Route::put('/api/category/{id}/visibility', [CategoryController::class, 'updateVisibility']);
    Route::put('/api/category/{category}', [CategoryController::class, 'update']);
    Route::delete('/api/category/{category}', [CategoryController::class, 'delete']);
 
    Route::post("/api/product/create", [ProductsController::class, 'store']);
    Route::put('/api/product/{product}', [ProductsController::class, 'update']);
    Route::delete('/api/product/{product}', [ProductsController::class, 'delete']);

    Route::put('/api/order/{id}/status', [OrdersController::class, 'updateStatus']);

    Route::post('/api/reservations/{id}/status', [ReservationController::class, 'updateStatus']);

    Route::post('/api/users/banned/{id}', [AuthController::class, 'ban']);
    
    Route::post("/api/blog/create", [BlogController::class, 'store']);
    Route::put('/api/blog/{blog}', [BlogController::class, 'update']);
    Route::delete('/api/blog/{blog}', [BlogController::class, 'delete']);

    Route::delete('/api/review/{review}', [ReviewsController::class, 'delete']);

    Route::post('/api/contacts/marked/{id}', [ContactController::class, 'mark']);
    Route::delete('/api/contact/{contact}', [ContactController::class, 'delete']);
    Route::post('/api/contacts/reply/{id}', [ContactController::class, 'replyToContact']);
 
    Route::post("/api/job/create", [JobController::class, 'store']);
    Route::put('/api/job/{job}', [JobController::class, 'update']);
    Route::delete('/api/job/{job}', [JobController::class, 'delete']);
    
    Route::post('/api/jobs/applications/checked/{id}', [JobController::class, 'checked']);
    Route::delete('/api/jobs/application/{application}', [JobController::class, 'deleteApplication']);

    Route::post('/api/partnership/status/{id}', [PartnershipController::class, 'updateStatus']);
    Route::delete('/api/partnership/{partnership}', [PartnershipController::class, 'delete']);

    Route::post('/api/setting/general', [GeneralSettingController::class, 'updateSetting']);

    Route::post('/api/setting/reservation', [ReservationSettingController::class, 'updateSetting']);

    Route::post('/api/setting/order', [OrderSettingController::class, 'updateSetting']);

    Route::post('/api/setting/hero', [HeroSettingController::class, 'updateSetting']);
});