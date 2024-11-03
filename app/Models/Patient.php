<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Patient extends Model
{
    use HasFactory;

    protected $fillable = ['identifier', 'name', 'age', 'gender', 'symptoms', 'hospital_id', 'triage_id']; // Agrega 'identifier' aquí

    public function hospital()
    {
        return $this->belongsTo(Hospital::class);
    }

    public function triage()
    {
        return $this->belongsTo(Triage::class); // Relación con el modelo Triage
    }
}
