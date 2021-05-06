<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Models\Region;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class RegionController extends Controller
{
    public function index()
    {
        $regions = Region::withCount('cities')->paginate(15);

        return Inertia::render('Admin/Regions/Index', [
            'regions' => $regions
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Regions/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
        ]);

        Region::create($request->all());

        return redirect()->route('admin.regions');
    }

    public function show(Region $region)
    {
        return Inertia::render('Admin/Regions/Show', [
            'region' => $region->load('cities'),
        ]);
    }

    public function update(Request $request, Region $region)
    {
        $request->validate([
            'name' => 'required',
        ]);

        $region->update($request->all());

        return back();
    }

    public function destroy(Region $region)
    {
        $region->delete();
        return redirect()->route('admin.regions');
    }
}
