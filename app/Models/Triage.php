<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Triage extends Model
{
    use HasFactory;

    protected $fillable = ['code', 'description', 'priority_level'];

    public function patients()
    {
        return $this->hasMany(Patient::class);
    }
}
