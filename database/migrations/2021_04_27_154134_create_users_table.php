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
            $table->boolean('saudi')->default(false); // nationality [true => saudi, false => non saudi]
            $table->integer('age')->default(18); // shows only for workers
            $table->text('bio')->nullable(); // shows for workers in 1st step & for companies at 2nd step
            //==============================

            // second step
            $table->foreignId('region_id')->nullable()->constrained()->nullOnDelete();
            $table->foreignId('city_id')->nullable()->constrained()->nullOnDelete();

            $table->string('national_id')->nullable(); // shows only for workers & optional for companies
            $table->string('company_name')->nullable(); // shows only for companies
            $table->string('commercial_registration')->nullable(); // shows only for companies
            $table->enum('activity', ['transport', 'livestock', 'contracting', 'farms', 'related', 'other'])->nullable(); // shows only for companies
            $table->string('origin')->nullable(); // shows only for companies
            $table->string('website')->nullable(); // shows only for companies
            //==============================

            // third step (workers & companies)
            // selected jobs
            $table->longText('jobs')->default(json_encode([])); // ['porter', 'cattle', 'fodder', 'driver', 'teacher', 'general']
            // number of workers of each job in company
            $table->longText('workers')->default(json_encode([])); // ['porter' => number, ...]
            //==============================

            // fourth step (workers)
            // [type(dina, dabbab, wanet, car), model, license, image(license)]
            $table->longText('vehicle')->default(json_encode([]));
            $table->boolean('not_owner')->default(false);
            // if (not_owner) [id, name, image(driver_id)]
            $table->longText('driver')->default(json_encode([]));
            //==============================

            // steps tracker
            $table->integer('step')->default(1);
            //==============================
            // confirmations
            $table->timestamp('conditions_accepted_at')->nullable();
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
