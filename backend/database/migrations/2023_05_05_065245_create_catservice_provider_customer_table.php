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
        Schema::create('catservice_provider_customer', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('catservice_provider_id');
            $table->foreign('catservice_provider_id')->references('id')->on('catservice_provider');
            // $table->foreignId('catservice_provider_id')->constrained()->onDelete('cascade')->onUpdate('cascade');
            $table->foreignId('user_id')->constrained()->onDelete('cascade')->onUpdate('cascade');
            $table->dateTime('shedule');
            $table->integer('duration');
            $table->json('location');
            $table->text('additional_details');
            $table->boolean('status');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('catservice_provider_customer');
    }
};
