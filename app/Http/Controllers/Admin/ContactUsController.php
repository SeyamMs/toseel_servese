<?php

namespace App\Http\Controllers\Admin;

use Carbon\Carbon;
use Inertia\Inertia;
use App\Models\ContactUs;
use App\Http\Controllers\Controller;

class ContactUsController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/ContactUs/Index', [
            'messages' => ContactUs::latest()->paginate(15)
        ]);
    }

    public function unread()
    {
        return Inertia::render('Admin/ContactUs/Index', [
            'messages' => ContactUs::whereNull('read_at')->latest()->paginate(15)
        ]);
    }

    public function show(ContactUs $message)
    {
        $message->update(['read_at' => Carbon::now()]);

        return Inertia::render('Admin/ContactUs/Show', [
            'message' => $message
        ]);
    }

    public function destroy(ContactUs $message)
    {
        $message->delete();
        return redirect()->route('admin.contact-us');
    }
}
