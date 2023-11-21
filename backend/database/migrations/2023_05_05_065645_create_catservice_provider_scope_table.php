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
        Schema::create('catservice_user_scope', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('catservice_user_id');
            $table->foreign('catservice_user_id')->references('id')->on('catservice_user');
            // $table->foreignId('catservice_provider_id')->constrained()->onDelete('cascade')->onUpdate('cascade');
            $table->foreignId('scope_id')->name("scope")->constrained()->onDelete('cascade')->onUpdate('cascade');
            $table->text('description');
            $table->integer('price');
            $table->json('duration');
            $table->json('limitation');
            $table->text('deliverable');
            $table->text('expectation');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('catservice_provider_scope');
    }
};
