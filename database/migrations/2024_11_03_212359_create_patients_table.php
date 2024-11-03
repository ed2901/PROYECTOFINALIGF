<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePatientsTable extends Migration
{
    public function up()
    {
        Schema::create('patients', function (Blueprint $table) {
            $table->id();
            $table->string('identifier'); // Esta línea debe estar presente
            $table->string('name');
            $table->integer('age');
            $table->string('gender');
            $table->text('symptoms');
            $table->foreignId('hospital_id')->constrained()->onDelete('cascade'); // Relación con Hospital
            $table->foreignId('triage_id')->nullable()->constrained()->onDelete('set null'); // Relación con Triage (opcional)
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('patients');
    }
}