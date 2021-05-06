<?php

namespace App\Http\Controllers;

use App\Models\Region;
use Illuminate\Http\Request;
use Inertia\Inertia;
use PeterColes\Countries\CountriesFacade as Countries;

class ProfileController extends Controller
{
    public function complete()
    {
        return Inertia::render('Complete', [
            'countries' => Countries::lookup('ar'),
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

        if ($request->user()->role == 'worker') { // if worker we need the age :D
            $rules['age'] = 'required|numeric|min:18';
        }

        $request->validate($rules);

        $request['step'] = $request->user()->step == 1 ? 2 : $request->user()->step;

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
                'activity' => 'required|in:transport,livestock,contracting,farms,related,other',
                'origin' => 'required',
                'has_website' => 'required|boolean',
                'website' => 'required_if:has_website,true|nullable|url',
            ]);

            if ($request->iqama) {
                $rules['national_id'] = 'required|numeric|digits:10';
            } else {
                $rules['commercial_registration'] = 'required|numeric|digits:10';
                $request['national_id'] = null;
            }

            $request['website'] = $request->has_website ? $request->website : null;
        }

        if ($request->user()->role == 'worker') {
            $rules['national_id'] = 'required|numeric|digits:10';
        }

        $request->validate($rules);

        $request['step'] = $request->user()->step == 2 ? 3 : $request->user()->step;

        $request->user()->update($request->except(['iqama', 'has_website']));

        return back();
    }

    public function thirdStep(Request $request)
    {
        $rules = [
            'jobs' => 'required|array|min:1|in:porter,cattle,fodder,driver,teacher,general',
        ];

        if ($request->user()->role == 'company') {
            $rules = array_merge($rules, [
                'workers' => 'required|array',
                'workers.*' => 'required|integer|min:1',
            ]);
        }

        $request->validate($rules, [
            'workers.*.required' => 'لم نستطيع حساب عدد العمال والتكلفة لوجود خطأ في مدخلاتك.',
            'workers.*.min' => 'يجب اضافة عامل واحد على الاقل.',
            'jobs.required' => 'يجب اختيار وظيفة واحدة على الاقل.',
            'jobs.min' => 'يجب اختيار وظيفة واحدة على الاقل.',
        ]);

        $request['step'] = $request->user()->step == 3 ? 4 : $request->user()->step;

        $request->user()->update($request->except('monthly_fee', 'total', 'release'));

        return back();
    }

    public function fourthStep(Request $request)
    {
        $rules = [
            'vehicle.type' => 'required|in:dina,dabbab,wanet,car',
            'vehicle.model' => 'required|numeric|digits:4|min:1999|max:2040',
            'vehicle.license' => 'required',
            'vehicle.license_image' => 'required|image|mimes:jpg,jpeg,png',
            'not_owner' => 'required|boolean',
            'driver.name' => 'required_if:not_owner,true',
            'driver.id' => 'required_if:not_owner,true|numeric|digits:10',
            'driver.id_image' => 'required_if:not_owner,true|image|mimes:jpg,jpeg,png',
        ];

        $request->validate($rules);

        if ($request->file('vehicle.license_image')) {
            $request->user()->clearMediaCollection('vehicle_license');
            $request->user()->addMedia($request->file('vehicle.license_image'))->toMediaCollection('vehicle_license');
        }

        if ($request->file('driver.id_image')) {
            $request->user()->clearMediaCollection('driver_id');
            $request->user()->addMedia($request->file('driver.id_image'))->toMediaCollection('driver_id');
        }

        $request['step'] = $request->user()->step == 4 ? 5 : $request->user()->step;

        $request->user()->update($request->except('license', 'id'));

        return back();
    }
}
