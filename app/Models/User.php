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
        'jobs', 'workers',
        //============================ 4th step
        'vehicle', 'not_owner', 'driver',
        //============================ steps tracker
        'step',
        //============================ confirmations
        'conditions_accepted_at',
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
        'saudi' => 'boolean',
        'jobs' => 'json',
        'workers' => 'json',
        'vehicle' => 'json',
        'not_owner' => 'boolean',
        'driver' => 'json',
    ];

    protected $appends = [
        'iqama',
        'has_website',
        'vehicle_license',
        'driver_id',
    ];

    public function getIqamaAttribute()
    {
        return !is_null($this->national_id);
    }

    public function getHasWebsiteAttribute()
    {
        return !is_null($this->website);
    }

    public function getVehicleLicenseAttribute()
    {
        return $this->getFirstMediaUrl('vehicle_license');
    }

    public function getDriverIdAttribute()
    {
        return $this->getFirstMediaUrl('driver_id');
    }
}
