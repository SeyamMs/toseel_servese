<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ContactUs extends Model
{
    protected $fillable = ['name', 'email', 'message', 'reply', 'read_at'];

    protected $casts = [
        'reply' => 'boolean',
        'read_at' => 'datetime',
    ];
}
