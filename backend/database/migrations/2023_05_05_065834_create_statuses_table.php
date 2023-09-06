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
        Schema::create('statuses', function (Blueprint $table) {
            $table->id();
            $table->date('available_time');
            $table->date('delivery_time');
            $table->integer('additonal_charge');
            $table->string('work_status');
            $table->integer('progress'); //work completion in percentage//
            $table->string('comments');
            $table->unsignedBigInteger('catservice_provider_customer_id');
            $table->foreign('catservice_provider_customer_id')->references('id')->on('catservice_provider_customer');
            // $table->foreignId('catservice_provider_customer_id')->constrained()->onDelete('cascade')->onUpdate('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('statuses');
    }
};
