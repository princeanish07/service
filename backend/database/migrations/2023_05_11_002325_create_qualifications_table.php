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
        Schema::create('qualifications', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade')->onUpdate('cascade');
            $table->json('education')->default(null);
            $table->json('special_degree')->nullable()->default(null);
            $table->string('profession')->default(null);
            $table->json('skills')->default(null);
            $table->json('training')->nullable()->default(null);
            $table->json('experience')->default(null);
            $table->json('expertise')->nullable()->default(null);
            $table->json('projects')->nullable()->default(null);
            $table->json('recent_workshop')->nullable()->default(null);
            $table->json('previous_work')->nullable()->default(null);
            $table->json('researches')->nullable()->default(null);
            $table->binary('certification')->nullable()->default(null);
            $table->binary('license')->nullable()->default(null);
            $table->json('gallery')->nullable()->default(null);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('qualifications');
    }
};
