<?php

use Illuminate\Support\Facades\Route;

// ADMIN AUTHENTICATION ROUTES => Admin\AuthController
Route::get('admin/login', [App\Http\Controllers\Admin\AuthController::class, 'showLoginForm'])->middleware('guest:admin')->name('admin.login');
Route::post('admin/login', [App\Http\Controllers\Admin\AuthController::class, 'login'])->middleware('guest:admin');
Route::post('admin/logout', [App\Http\Controllers\Admin\AuthController::class, 'logout'])->middleware('auth:admin')->name('admin.logout');

// ADMIN ROUTES => auth:admin middleware
Route::group(['prefix' => 'admin', 'middleware' => ['auth:admin']], function () {
    Route::permanentRedirect('/', url('admin/dashboard'));
    Route::get('dashboard', [App\Http\Controllers\Admin\DashboardController::class, 'dashboard'])->name('admin.dashboard');
    Route::group(['prefix' => 'profile'], function () {
        Route::get('/', [App\Http\Controllers\Admin\ProfileController::class, 'profile'])->name('admin.profile');
        Route::post('/', [App\Http\Controllers\Admin\ProfileController::class, 'update']);
    });
    Route::group(['prefix' => 'regions'], function () {
        Route::get('/', [App\Http\Controllers\Admin\RegionController::class, 'index'])->name('admin.regions');
        Route::get('create', [App\Http\Controllers\Admin\RegionController::class, 'create'])->name('admin.regions.create');
        Route::post('/', [App\Http\Controllers\Admin\RegionController::class, 'store'])->name('admin.regions.store');
        Route::get('{region}', [App\Http\Controllers\Admin\RegionController::class, 'show'])->name('admin.regions.show');
        Route::post('{region}', [App\Http\Controllers\Admin\RegionController::class, 'update'])->name('admin.regions.update');
        Route::delete('{region}', [App\Http\Controllers\Admin\RegionController::class, 'destroy'])->name('admin.regions.destroy');
    });
    Route::group(['prefix' => 'cities'], function () {
        Route::get('/', [App\Http\Controllers\Admin\CityController::class, 'index'])->name('admin.cities');
        Route::get('create', [App\Http\Controllers\Admin\CityController::class, 'create'])->name('admin.cities.create');
        Route::post('/', [App\Http\Controllers\Admin\CityController::class, 'store'])->name('admin.cities.store');
        Route::get('{city}', [App\Http\Controllers\Admin\CityController::class, 'show'])->name('admin.cities.show');
        Route::post('{city}', [App\Http\Controllers\Admin\CityController::class, 'update'])->name('admin.cities.update');
        Route::delete('{city}', [App\Http\Controllers\Admin\CityController::class, 'destroy'])->name('admin.cities.destroy');
    });
    Route::group(['prefix' => 'users'], function () {
        Route::get('/', [App\Http\Controllers\Admin\UserController::class, 'index'])->name('admin.users');
        Route::get('create', [App\Http\Controllers\Admin\UserController::class, 'create'])->name('admin.users.create');
        Route::post('/', [App\Http\Controllers\Admin\UserController::class, 'store'])->name('admin.users.store');
        Route::get('{user}', [App\Http\Controllers\Admin\UserController::class, 'show'])->name('admin.users.show');
        Route::post('{user}', [App\Http\Controllers\Admin\UserController::class, 'update'])->name('admin.users.update');
        Route::delete('{user}', [App\Http\Controllers\Admin\UserController::class, 'destroy'])->name('admin.users.destroy');
    });
    Route::group(['prefix' => 'subscriptions'], function () {
        Route::get('/', [App\Http\Controllers\Admin\SubscriptionController::class, 'index'])->name('admin.subscriptions');
    });
    Route::group(['prefix' => 'contact-us'], function () {
        Route::get('/', [App\Http\Controllers\Admin\ContactUsController::class, 'index'])->name('admin.contact-us');
        Route::get('unread', [App\Http\Controllers\Admin\ContactUsController::class, 'unread'])->name('admin.contact-us.unread');
        Route::get('{message}', [App\Http\Controllers\Admin\ContactUsController::class, 'show'])->name('admin.contact-us.show');
        Route::delete('{message}', [App\Http\Controllers\Admin\ContactUsController::class, 'destroy'])->name('admin.contact-us.destroy');
    });
    Route::group(['prefix' => 'settings'], function () {
        Route::get('/', [App\Http\Controllers\Admin\SettingsController::class, 'settings'])->name('admin.settings');
        Route::post('/', [App\Http\Controllers\Admin\SettingsController::class, 'update']);
    });
});

// USER AUTHENTICATION ROUTES => AuthController
// Route::get('login', [App\Http\Controllers\AuthController::class, 'showLoginForm'])->middleware(['guest', 'visit'])->name('login');
Route::post('login', [App\Http\Controllers\AuthController::class, 'login'])->middleware('guest')->name('login');
// Route::get('register', [App\Http\Controllers\AuthController::class, 'showRegisterForm'])->middleware(['guest', 'visit'])->name('register');
Route::post('register', [App\Http\Controllers\AuthController::class, 'register'])->middleware('guest')->name('register');
Route::post('logout', [App\Http\Controllers\AuthController::class, 'logout'])->middleware('auth')->name('logout');

// USER RESET PASSWORD ROUTES => ResetPasswordController
// Route::get('forgot-password', [App\Http\Controllers\ResetPasswordController::class, 'request'])->middleware(['guest', 'visit'])->name('password.request');
// Route::post('forgot-password', [App\Http\Controllers\ResetPasswordController::class, 'email'])->middleware('guest')->name('password.email');
// Route::get('reset-password/{token}', [App\Http\Controllers\ResetPasswordController::class, 'reset'])->middleware(['guest', 'visit'])->name('password.reset');
// Route::post('reset-password', [App\Http\Controllers\ResetPasswordController::class, 'update'])->middleware('guest')->name('password.update');

// USER COMPLETE PROFILE ROUTES => ProfileController
Route::group(['prefix' => 'complete', 'middleware' => ['auth', 'completed.profile']], function () {
    Route::get('/', [App\Http\Controllers\ProfileController::class, 'complete'])->name('complete');
    Route::post('first', [App\Http\Controllers\ProfileController::class, 'firstStep'])->name('first.step');
    Route::post('second', [App\Http\Controllers\ProfileController::class, 'secondStep'])->name('second.step');
    Route::post('third', [App\Http\Controllers\ProfileController::class, 'thirdStep'])->name('third.step');
    Route::post('fourth', [App\Http\Controllers\ProfileController::class, 'fourthStep'])->name('fourth.step');
});

Route::group(['prefix' => 'conditions', 'middleware' => ['auth', 'complete.profile']], function () {
    Route::get('/', [App\Http\Controllers\ConditionsController::class, 'conditions'])->name('conditions');
    Route::post('accept', [App\Http\Controllers\ConditionsController::class, 'accept'])->name('accept');
});

// USER ROUTES => auth middleware
Route::group(['prefix' => 'my', 'middleware' => ['auth', 'complete.profile', 'accept.conditions']], function () {
    Route::get('services', function () {
        return 'this is uncompleted';
    })->name('my.services');
});

Route::get('/', [App\Http\Controllers\InertiaController::class, 'home'])->name('home');
Route::post('contact-us', [App\Http\Controllers\ContactUsController::class, 'send'])->name('contact-us.send');
