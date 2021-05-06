<?php

namespace App\Http\Controllers\Admin;

use App\Models\City;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Region;

class CityController extends Controller
{
    public function index()
    {
        $cities = City::with('region')->paginate(15);

        return Inertia::render('Admin/Cities/Index', [
            'cities' => $cities
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Cities/Create', [
            'regions' => Region::all()
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'region_id' => 'required|exists:regions,id',
        ]);

        City::create($request->all());

        return redirect()->route('admin.cities');
    }

    public function show(City $city)
    {
        return Inertia::render('Admin/Cities/Show', [
            'city' => $city,
            'regions' => Region::all()
        ]);
    }

    public function update(Request $request, City $city)
    {
        $request->validate([
            'name' => 'required',
            'region_id' => 'required|exists:regions,id',
        ]);

        $city->update($request->all());

        return back();
    }

    public function destroy(City $city)
    {
        $city->delete();
        return redirect()->route('admin.cities');
    }
}
