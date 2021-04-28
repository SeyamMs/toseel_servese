<?php

namespace App\Models;

use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable implements HasMedia
{
    use InteractsWithMedia;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        //============================ register
        'role', 'email', 'phone', 'password',
        //============================ 1st step
        'first_name', 'middle_name', 'last_name', 'saudi', 'age', 'bio',
        //============================ 2nd step
        'region_id', 'city_id', 'national_id', 'company_name', 'commercial_registration', 'activity', 'origin', 'website',
        //============================ 3rd step
        'porter', 'cattle', 'fodder', 'driver', 'teacher', 'porters', 'cattles', 'fodders', 'drivers', 'teachers',
        //============================ 4th step
        'vehicle_type', 'vehicle_model', 'vehicle_license', 'driver_name', 'driver_id',
        //============================ steps tracker
        'step'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'porter' => 'boolean',
        'cattle' => 'boolean',
        'fodder' => 'boolean',
        'driver' => 'boolean',
        'teacher' => 'boolean',
        'email_verified_at' => 'datetime',
    ];
}
