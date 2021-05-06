<?php

namespace App\Http\Controllers\Admin;

use App\Settings;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SettingsController extends Controller
{
    public function settings(Settings $settings)
    {
        return Inertia::render('Admin/Settings', [
            'settings' => $settings->all()
        ]);
    }

    public function update(Request $request, Settings $settings)
    {
        $request->validate([
            'about_us' => 'required',
            'message' => 'required',
            'vision' => 'required',
            'goal' => 'required',
            'address' => 'required',
            'phone' => 'required',
            'email' => 'required|email',
            'footer' => 'required',
            'company_pdf' => 'required',
            'worker_pdf' => 'required',
        ]);

        $settings->put($request->all());

        return back();
    }
}
