<?php

namespace App\Http\Controllers;

use App\Models\Region;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProfileController extends Controller
{
    public function complete()
    {
        return Inertia::render('Complete', [
            'countries' => \Countries::lookup('ar'),
            'regions' => Region::all()->load('cities'),
        ]);
    }

    public function firstStep(Request $request)
    {
        $rules = [
            'first_name' => 'required',
            'middle_name' => 'required',
            'last_name' => 'required',
            'saudi' => 'required|boolean',
        ];

        if ($request->user()->role == 'worker') {
            $rules = array_merge($rules, [
                'age' => 'required|numeric|min:18',
                'bio' => 'required',
            ]);
        }

        $request->validate($rules);

        if ($request->user()->step == 1) {
            $request['step'] = 2;
        }
        $request->user()->update($request->all());

        return back();
    }

    public function secondStep(Request $request)
    {
        $rules = [
            'region_id' => 'required|exists:regions,id',
            'city_id' => 'required|exists:cities,id',
        ];

        if ($request->user()->role == 'company') {
            $rules = array_merge($rules, [
                'company_name' => 'required',
                'iqama' => 'required|boolean',
                'commercial_registration' => 'required_if:iqama,false',
                'national_id' => 'required_if:iqama,true',
                'activity' => 'required|in:transport,livestock,contracting,farms,related,other',
                'origin' => 'required',
                'has_website' => 'required|boolean',
                'website' => 'required_if:has_website,true|nullable|url',
                'bio' => 'nullable',
            ]);
        }

        if ($request->user()->role == 'worker') {
            $rules = array_merge($rules, [
                'national_id' => 'required',
            ]);
        }

        $request->validate($rules);

        if ($request->user()->step == 2) {
            $request['step'] = 3;
        }
        $request->user()->update($request->except(['iqama', 'has_website']));

        return back();
    }

    public function thirdStep(Request $request)
    {
        $rules = [
            'porter' => 'required|boolean',
            'cattle' => 'required|boolean',
            'fodder' => 'required|boolean',
            'driver' => 'required|boolean',
            'teacher' => 'required|boolean',
        ];

        if ($request->user()->role == 'company') {
            $rules = array_merge($rules, [
                'porters' => 'required|integer',
                'cattles' => 'required|integer',
                'fodders' => 'required|integer',
                'drivers' => 'required|integer',
                'teachers' => 'required|integer',
                'workers' => 'required|integer|min:1',
            ]);
        }

        if ($request->user()->role == 'worker') {
            $rules['jobs'] = 'array|min:1';
        }

        $request->validate($rules, [
            'workers.min' => 'يجب اضافة عامل واحد على الاقل.',
            'jobs.min' => 'يجب اختيار وظيفة واحدة على الاقل.',
        ]);

        if ($request->user()->step == 3) {
            $request['step'] = 4;
        }
        $request->user()->update($request->except(['all', 'workers', 'release', 'monthly_fee', 'total', 'jobs']));

        return back();
    }

    public function fourthStep(Request $request)
    {
        $request->validate([
            'vehicle_type' => 'required|in:dina,dabbab,wanet,car',
            'vehicle_model' => 'required|numeric',
            'vehicle_license' => 'required',
            'vehicle_license_image' => 'required|image',
            'owner' => 'required|boolean',
            'driver_name' => 'required_if:owner,false',
            'driver_id' => 'required_if:owner,false',
            'driver_id_image' => 'required_if:owner,false|nullable|image',
        ]);

        if ($request->user()->step == 4) {
            $request['step'] = 5;
        }
        $request->user()->update($request->except(['vehicle_license_image_preview', 'driver_id_image_preview']));

        if ($request->vehicle_license_image) {
            $request->user()->clearMediaCollection('vehicle_license');
            $request->user()->addMedia($request->vehicle_license_image)->toMediaCollection('vehicle_license');
        }

        if ($request->driver_id_image) {
            $request->user()->clearMediaCollection('driver_id');
            $request->user()->addMedia($request->driver_id_image)->toMediaCollection('driver_id');
        }

        return back();
    }
}
