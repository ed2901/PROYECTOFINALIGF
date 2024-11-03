<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTriagesTable extends Migration
{
    public function up()
    {
        Schema::create('triages', function (Blueprint $table) {
            $table->id();
            $table->string('code')->unique();
            $table->string('description');
            $table->integer('priority_level');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('triages');
    }
}
