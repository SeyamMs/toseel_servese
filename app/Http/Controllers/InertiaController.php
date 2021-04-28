<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class InertiaController extends Controller
{
    public function home()
    {
        return Inertia::render('Home');
    }
}
