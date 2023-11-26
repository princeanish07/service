<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('service_user', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');     
            $table->unsignedBigInteger('service_id');
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('service_id')->references('id')->on('services');
            // $table->date('availabe_date');
            // $table->time('period');
            // $table->integer('duration');
            // $table->unsignedBigInteger('price');
            // $table->json('location');
            // $table->json('refund_Policy')->nullable()->default(null);
            // $table->json('gallery')->nullable();
            // $table->boolean('status');
            // 'description' => $service['description'],
            // 'days' => $service['Days'],
            // 'time' => $service['time'],
            // 'charge' => $service['charge'],
            // 'offers' => $service['offers'],
            // 'experience' => $service['experience'],
            // 'image' => $service['image'],
            // 'address' => $service['address'],

            $table->text('description')->nullable()->default(null);
            $table->json('days')->nullable();
            $table->string('time')->nullable();
            $table->string('charge')->nullable();
            $table->string('offers')->nullable();
            $table->text('experience')->nullable()->default(null);
            $table->string('image')->nullable()->default(null);
            $table->string('address')->nullable()->default(null);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('service_user');
    }
};
