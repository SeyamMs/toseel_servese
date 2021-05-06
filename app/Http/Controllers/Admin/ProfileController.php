<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ProfileController extends Controller
{
    public function profile()
    {
        return Inertia::render('Admin/Profile');
    }

    public function update(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'nullable|min:6|confirmed',
        ]);

        auth('admin')->user()->update($request->except('password'));

        if ($request->password) {
            auth('admin')->user()->update([
                'password' => bcrypt($request->password)
            ]);
        }

        return back();
    }
}
