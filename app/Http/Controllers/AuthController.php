<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function showLoginForm()
    {
        return Inertia::render('Login');
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $credentials = [
            'email' => $request->email,
            'password' => $request->password,
        ];

        if (Auth::guard('web')->attempt($credentials)) {
            return redirect()->intended(route('home'));
        }

        return back()->withErrors(['email' => 'يرجى التاكد من البريد وكلمة المرور.']);
    }

    public function logout()
    {
        Auth::guard('web')->logout();
        return back();
    }

    public function showRegisterForm()
    {
        return Inertia::render('Register');
    }

    public function register(Request $request)
    {
        $request->validate([
            'role' => 'required|in:client,company,worker',
            'email' => 'required|email|unique:users',
            'phone' => ['required', 'unique:users', 'regex:/^(5|0|3|6|4|9|1|8|7)([0-9]{7})$/'],
            'password' => 'required|min:6'
        ], [
            'phone.regex' => 'يرجى ادخال رقم هاتف صحيح.',
        ]);

        if ($request->email === $request->password) {
            $error = \Illuminate\Validation\ValidationException::withMessages([
                'password' => ['لا يمكنك استعمال بريدك الالكتروني ككلمة مرور.'],
            ]);
            throw $error;
        }

        $request['password'] = bcrypt($request->password); // hash the password...
        $user = User::create($request->all());
        Auth::guard('web')->login($user);

        return redirect()->route('complete');
    }
}
