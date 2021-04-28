<?php

use Illuminate\Support\Facades\Route;

// ADMIN AUTHENTICATION ROUTES => Admin\AuthController
Route::get('admin/login', [App\Http\Controllers\Admin\AuthController::class, 'showLoginForm'])->middleware('guest:admin')->name('admin.login');
Route::post('admin/login', [App\Http\Controllers\Admin\AuthController::class, 'login'])->middleware('guest:admin');
Route::post('admin/logout', [App\Http\Controllers\Admin\AuthController::class, 'logout'])->middleware('auth:admin')->name('admin.logout');

// ADMIN ROUTES => auth:admin middleware
Route::group(['prefix' => 'admin', 'middleware' => 'auth:admin'], function () {
    Route::permanentRedirect('/', url('admin/dashboard'));
    Route::get('dashboard', [App\Http\Controllers\Admin\DashboardController::class, 'dashboard'])->name('admin.dashboard');
    Route::group(['prefix' => 'profile'], function () {
        Route::get('/', [App\Http\Controllers\Admin\ProfileController::class, 'profile'])->name('admin.profile');
        Route::put('/', [App\Http\Controllers\Admin\ProfileController::class, 'update']);
    });
});

// USER AUTHENTICATION ROUTES => AuthController
Route::get('login', [App\Http\Controllers\AuthController::class, 'showLoginForm'])->middleware(['guest', 'visit'])->name('login');
Route::post('login', [App\Http\Controllers\AuthController::class, 'login'])->middleware('guest');
Route::get('register', [App\Http\Controllers\AuthController::class, 'showRegisterForm'])->middleware(['guest', 'visit'])->name('register');
Route::post('register', [App\Http\Controllers\AuthController::class, 'register'])->middleware('guest');
Route::post('logout', [App\Http\Controllers\AuthController::class, 'logout'])->middleware('auth')->name('logout');

// USER RESET PASSWORD ROUTES => ResetPasswordController
Route::get('forgot-password', [App\Http\Controllers\ResetPasswordController::class, 'request'])->middleware(['guest', 'visit'])->name('password.request');
Route::post('forgot-password', [App\Http\Controllers\ResetPasswordController::class, 'email'])->middleware('guest')->name('password.email');
Route::get('reset-password/{token}', [App\Http\Controllers\ResetPasswordController::class, 'reset'])->middleware(['guest', 'visit'])->name('password.reset');
Route::post('reset-password', [App\Http\Controllers\ResetPasswordController::class, 'update'])->middleware('guest')->name('password.update');

// USER COMPLETE PROFILE ROUTES => ProfileController
Route::group(['prefix' => 'complete', 'middleware' => ['auth', 'completed.profile']], function () {
    Route::get('/', [App\Http\Controllers\ProfileController::class, 'complete'])->name('complete');

    Route::post('first', [App\Http\Controllers\ProfileController::class, 'firstStep'])->name('first.step');
    Route::post('second', [App\Http\Controllers\ProfileController::class, 'secondStep'])->name('second.step');
    Route::post('third', [App\Http\Controllers\ProfileController::class, 'thirdStep'])->name('third.step');
    Route::post('fourth', [App\Http\Controllers\ProfileController::class, 'fourthStep'])->name('fourth.step');
});

// USER ROUTES => auth middleware
Route::group(['prefix' => 'my', 'middleware' => ['auth', 'complete.profile']], function () {
    Route::get('services', function () {
        return 'this is uncompleted';
    })->name('my.services');
});

Route::get('/', [App\Http\Controllers\InertiaController::class, 'home'])->name('home');
