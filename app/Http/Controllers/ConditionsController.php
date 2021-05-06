<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ConditionsController extends Controller
{
    public function conditions()
    {
        return Inertia::render('Conditions');
    }

    public function accept(Request $request)
    {
        $rules = [
            'conditions' => ['array']
        ];

        if ($request->user()->role === 'client') {
            $rules['conditions'][] = 'min:6';
        }

        if ($request->user()->role === 'company') {
            $rules['conditions'][] = 'min:10';
        }

        if ($request->user()->role === 'worker') {
            $rules['conditions'][] = 'min:9';
        }

        $request->validate($rules, [
            'conditions.array' => 'يجب الموافقة على كافة الشروط.',
            'conditions.min' => 'يجب الموافقة على كافة الشروط.',
        ]);

        $request->user()->update([
            'conditions_accepted_at' => now()
        ]);

        return back();
    }
}
