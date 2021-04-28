<?php

namespace Database\Seeders;

use App\Models\Admin;
use Illuminate\Database\Seeder;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        if (!Admin::where('email', 'seyam.ms@gmail.com')->first()) {
            Admin::create([
                'name' => 'Mohammed Seyam',
                'email' => 'seyam.ms@gmail.com',
                'password' => bcrypt('password'),
            ]);
        }
    }
}
