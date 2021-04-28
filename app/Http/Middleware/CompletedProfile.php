<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class CompletedProfile
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        if ($request->user()->role == 'client') {
            if (!in_array($request->user()->step, [1, 2])) {
                return redirect()->route('home');
            }
        }

        if ($request->user()->role == 'company') {
            if (!in_array($request->user()->step, [1, 2, 3])) {
                return redirect()->route('home');
            }
        }

        if ($request->user()->role == 'worker') {
            if (!in_array($request->user()->step, [1, 2, 3, 4])) {
                return redirect()->route('home');
            }
        }

        return $next($request);
    }
}
