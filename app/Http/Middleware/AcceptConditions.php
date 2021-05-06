<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class AcceptConditions
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
        if (is_null($request->user()->conditions_accepted_at)) {
            return redirect()->route('conditions');
        }

        return $next($request);
    }
}
