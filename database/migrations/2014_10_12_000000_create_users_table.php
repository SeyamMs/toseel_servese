<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();

            // registration
            $table->enum('role', ['client', 'company', 'worker']); // classification
            $table->string('email')->unique();
            $table->string('phone')->unique(); // without the country code nor 05
            // $table->string('username')->unique();
            $table->string('password');
            //==============================

            // first step
            // name (for companies it means their representative)
            $table->string('first_name')->nullable();
            $table->string('middle_name')->nullable();
            $table->string('last_name')->nullable();
            $table->boolean('saudi')->nullable(); // nationality [true => saudi, false => non saudi]
            $table->string('age')->nullable(); // shows only for workers
            $table->text('bio')->nullable(); // shows for workers in 1st step & for companies at 2nd step
            //==============================

            // second step
            $table->foreignId('region_id')->nullable();
            $table->foreignId('city_id')->nullable();
            $table->string('national_id')->nullable(); // shows only for workers & optional for companies
            $table->string('company_name')->nullable(); // shows only for companies
            $table->string('commercial_registration')->nullable(); // shows only for companies
            $table->enum('activity', ['transport', 'livestock', 'contracting', 'farms', 'related', 'other'])->nullable(); // shows only for companies
            $table->string('origin')->nullable(); // shows only for companies
            $table->string('website')->nullable(); // shows only for companies
            //==============================

            // third step (workers & companies)
            // professions
            $table->boolean('porter')->nullable();
            $table->boolean('cattle')->nullable();
            $table->boolean('fodder')->nullable();
            $table->boolean('driver')->nullable();
            $table->boolean('teacher')->nullable();
            // number of workers in each profession (companies) 
            $table->integer('porters')->nullable();
            $table->integer('cattles')->nullable();
            $table->integer('fodders')->nullable();
            $table->integer('drivers')->nullable();
            $table->integer('teachers')->nullable();
            //==============================

            // fourth step (workers)
            // vehicle data + vehicle_license_image
            $table->enum('vehicle_type', ['dina', 'dabbab', 'wanet', 'car'])->nullable();
            $table->integer('vehicle_model')->nullable();
            $table->string('vehicle_license')->nullable();
            // driver data (in case he is not the owner) + driver_id_image
            $table->string('driver_name')->nullable();
            $table->string('driver_id')->nullable();
            //==============================

            // steps tracker
            $table->integer('step')->default(1);
            //==============================
            // confirmations
            // $table->timestamp('email_verified_at')->nullable();
            // $table->timestamp('phone_verified_at')->nullable();
            //==============================

            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
