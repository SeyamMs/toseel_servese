<?php

namespace App\Http\Controllers\Admin;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Region;
use PeterColes\Countries\CountriesFacade as Countries;

class UserController extends Controller
{
    public function index()
    {
        $users = User::paginate(15);

        return Inertia::render('Admin/Users/Index', [
            'users' => $users
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Users/Create', [
            'regions' => Region::all()->load('cities'),
            'countries' => Countries::lookup('ar'),
        ]);
    }

    public function store(Request $request)
    {
        $rules = [
            'role' => 'required|in:client,company,worker',
            'phone' => ['required', 'unique:users,phone,', 'regex:/^(5|0|3|6|4|9|1|8|7)([0-9]{7})$/'],
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:6|confirmed',

            'first_name' => 'required',
            'middle_name' => 'required',
            'last_name' => 'required',
            'saudi' => 'required|boolean',

            'region_id' => 'required|exists:regions,id',
            'city_id' => 'required|exists:cities,id',
        ];

        if ($request->role == 'company') {
            $rules = array_merge($rules, [
                'company_name' => 'required',
                'iqama' => 'required|boolean',
                'activity' => 'required|in:transport,livestock,contracting,farms,related,other',
                'origin' => 'required',
                'has_website' => 'required|boolean',
                'website' => 'required_if:has_website,true|nullable|url',

                'jobs' => 'required|array|min:1|in:porter,cattle,fodder,driver,teacher,general',
                'workers' => 'required|array',
                'workers.*' => 'required|integer|min:1',
            ]);

            if ($request->iqama) {
                $rules['national_id'] = 'required|numeric|digits:10';
            } else {
                $rules['commercial_registration'] = 'required|numeric|digits:10';
            }
        }

        if ($request->role == 'worker') {
            $rules = array_merge($rules, [
                'age' => 'required|numeric|min:18',

                'national_id' => 'required|numeric|digits:10',

                'jobs' => 'required|array|min:1|in:porter,cattle,fodder,driver,teacher,general',

                'vehicle.type' => 'required|in:dina,dabbab,wanet,car',
                'vehicle.model' => 'required|numeric|digits:4|min:1999|max:2040',
                'vehicle.license' => 'required',
                'vehicle.license_image' => 'required|image|mimes:jpg,jpeg,png',
                'not_owner' => 'required|boolean',
                'driver.name' => 'required_if:not_owner,true',
                'driver.id' => 'required_if:not_owner,true|numeric|digits:10',
                'driver.id_image' => 'required_if:not_owner,true|image|mimes:jpg,jpeg,png',
            ]);
        }

        $request->validate($rules, [
            'phone.regex' => 'يرجى ادخال رقم هاتف صحيح.',
            'workers.*.required' => 'لم نستطيع حساب عدد العمال والتكلفة لوجود خطأ في مدخلاتك.',
            'workers.*.min' => 'يجب اضافة عامل واحد على الاقل.',
            'jobs.required' => 'يجب اختيار وظيفة واحدة على الاقل.',
            'jobs.min' => 'يجب اختيار وظيفة واحدة على الاقل.',
        ]);

        $feilds = [
            'role',
            'email',
            'phone',
            'password',
            'first_name',
            'middle_name',
            'last_name',
            'saudi',
            'region_id',
            'city_id',
        ];
        $request['step'] = 3;

        if ($request->role === 'company') {
            $feilds = array_merge($feilds, [
                'bio',
                'national_id',
                'company_name',
                'commercial_registration',
                'activity',
                'origin',
                'website',
                'jobs',
                'workers',
            ]);

            $request['national_id'] = $request->iqama ? $request->national_id : null;
            $request['website'] = $request->has_website ? $request->website : null;
            $request['step'] = 4;
        }

        if ($request->role === 'worker') {
            $feilds = array_merge($feilds, [
                'age',
                'bio',
                'national_id',
                'jobs',
                'vehicle',
                'driver',
            ]);
            $request['step'] = 5;
        }

        if ($request->email === $request->password) {
            $error = \Illuminate\Validation\ValidationException::withMessages([
                'password' => ['لا يمكنك استعمال البريد الالكتروني ككلمة مرور.'],
            ]);
            throw $error;
        }

        $request['password'] = bcrypt($request->password);

        $user = User::create($request->only($feilds));

        if ($request->file('vehicle.license_image')) {
            $user->clearMediaCollection('vehicle_license');
            $user->addMedia($request->file('vehicle.license_image'))->toMediaCollection('vehicle_license');
        }

        if ($request->file('driver.id_image')) {
            $user->clearMediaCollection('driver_id');
            $user->addMedia($request->file('driver.id_image'))->toMediaCollection('driver_id');
        }

        return redirect()->route('admin.users');
    }

    public function show(User $user)
    {
        return Inertia::render('Admin/Users/Show', [
            'user' => $user,
            'regions' => Region::all()->load('cities'),
            'countries' => Countries::lookup('ar'),
        ]);
    }

    public function update(Request $request, User $user)
    {
        $rules = [
            'phone' => ['required', 'unique:users,phone,' . $user->id, 'regex:/^(5|0|3|6|4|9|1|8|7)([0-9]{7})$/'],
            'email' => 'required|email|unique:users,email,' . $user->id,
            'password' => 'nullable|min:6|confirmed',

            'first_name' => 'required',
            'middle_name' => 'required',
            'last_name' => 'required',
            'saudi' => 'required|boolean',

            'region_id' => 'required|exists:regions,id',
            'city_id' => 'required|exists:cities,id',
        ];

        if ($user->role == 'company') {
            $rules = array_merge($rules, [
                'company_name' => 'required',
                'iqama' => 'required|boolean',
                'activity' => 'required|in:transport,livestock,contracting,farms,related,other',
                'origin' => 'required',
                'has_website' => 'required|boolean',
                'website' => 'required_if:has_website,true|nullable|url',

                'jobs' => 'required|array|min:1|in:porter,cattle,fodder,driver,teacher,general',
                'workers' => 'required|array',
                'workers.*' => 'required|integer|min:1',
            ]);

            if ($request->iqama) {
                $rules['national_id'] = 'required|numeric|digits:10';
            } else {
                $rules['commercial_registration'] = 'required|numeric|digits:10';
                $request['national_id'] = null;
            }

            $request['website'] = $request->has_website ? $request->website : null;
        }

        if ($user->role == 'worker') {
            $rules = array_merge($rules, [
                'age' => 'required|numeric|min:18',

                'national_id' => 'required|numeric|digits:10',

                'jobs' => 'required|array|min:1|in:porter,cattle,fodder,driver,teacher,general',

                'vehicle.type' => 'required|in:dina,dabbab,wanet,car',
                'vehicle.model' => 'required|numeric|digits:4|min:1999|max:2040',
                'vehicle.license' => 'required',
                'vehicle.license_image' => 'sometimes|required|image|mimes:jpg,jpeg,png',
                'not_owner' => 'required|boolean',
                'driver.name' => 'required_if:not_owner,true',
                'driver.id' => 'required_if:not_owner,true|numeric|digits:10',
                'driver.id_image' => 'required_if:not_owner,true|image|mimes:jpg,jpeg,png',
            ]);
        }

        $request->validate($rules, [
            'phone.regex' => 'يرجى ادخال رقم هاتف صحيح.',
            'workers.*.required' => 'لم نستطيع حساب عدد العمال والتكلفة لوجود خطأ في مدخلاتك.',
            'workers.*.min' => 'يجب اضافة عامل واحد على الاقل.',
            'jobs.required' => 'يجب اختيار وظيفة واحدة على الاقل.',
            'jobs.min' => 'يجب اختيار وظيفة واحدة على الاقل.',
        ]);

        if ($request->file('vehicle.license_image')) {
            $user->clearMediaCollection('vehicle_license');
            $user->addMedia($request->file('vehicle.license_image'))->toMediaCollection('vehicle_license');
        }

        if ($request->file('driver.id_image')) {
            $user->clearMediaCollection('driver_id');
            $user->addMedia($request->file('driver.id_image'))->toMediaCollection('driver_id');
        }

        $user->update($request->except('password'));

        if ($request->password) {
            if ($request->email === $request->password) {
                $error = \Illuminate\Validation\ValidationException::withMessages([
                    'password' => ['لا يمكنك استعمال البريد الالكتروني ككلمة مرور.'],
                ]);
                throw $error;
            }

            $user->update([
                'password' => bcrypt($request->password)
            ]);
        }

        return back();
    }

    public function destroy(User $user)
    {
        $user->delete();
        return redirect()->route('admin.users');
    }
}
