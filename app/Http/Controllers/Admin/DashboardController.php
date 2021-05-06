<?php

namespace App\Http\Controllers\Admin;

use App\Models\City;
use App\Models\User;
use Inertia\Inertia;
use App\Models\Region;
use App\Http\Controllers\Controller;
use App\Models\ContactUs;

class DashboardController extends Controller
{
    public function dashboard()
    {
        $statistics = [
            'regions' => Region::count(),
            'cities' => City::count(),
            'clients' => User::where('role', 'client')->count(),
            'companies' => User::where('role', 'company')->count(),
            'workers' => User::where('role', 'worker')->count(),
            'messages' => ContactUs::count(),
            'new_messages' => ContactUs::whereNull('read_at')->count(),
        ];

        return Inertia::render('Admin/Dashboard', [
            'statistics' => $statistics
        ]);
    }
}
