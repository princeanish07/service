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
        Schema::create('catservice_provider', function (Blueprint $table) {
            $table->id();
            $table->foreignId('catservice_id')->constrained()->onDelete('cascade')->onUpdate('cascade');
            $table->foreignId('user_id')->constrained()->onDelete('cascade')->onUpdate('cascade');
            $table->date('availabe_date');
            $table->time('period');
            $table->integer('duration');
            $table->unsignedBigInteger('price');
            $table->json('location');
            $table->json('refund_Policy')->nullable()->default(null);
            $table->json('gallery')->nullable();
            $table->boolean('status');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('catservice_provider');
    }
};
