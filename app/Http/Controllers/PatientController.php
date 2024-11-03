<?php

namespace App\Http\Controllers;

use App\Models\Patient;
use App\Models\Hospital;
use App\Models\Triage;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PatientController extends Controller
{
    public function index()
    {
        // Obtiene todos los pacientes junto con sus hospitales y triages
        $patients = Patient::with('hospital', 'triage')->get();
        return Inertia::render('Patients/indexP', [ // Asegúrate de que la capitalización sea correcta
            'patients' => $patients,
        ]);
    }

    public function create()
    {
        // Obtiene todos los hospitales y triages para el formulario de creación
        $hospitals = Hospital::all();
        $triages = Triage::all();
        return Inertia::render('Patients/createP', [ // Asegúrate de que la capitalización sea correcta
            'hospitals' => $hospitals,
            'triages' => $triages,
        ]);
    }

    public function store(Request $request)
    {
        // Valida los datos del formulario antes de guardar
        $request->validate([
            'identifier' => 'required|unique:patients',
            'name' => 'required',
            'age' => 'required|integer',
            'gender' => 'required',
            'symptoms' => 'required',
            'hospital_id' => 'required|exists:hospitals,id',
            'triage_id' => 'nullable|exists:triages,id',
        ]);

        // Crea un nuevo paciente
        Patient::create($request->all());
        return redirect()->route('patients.index')->with('success', 'Patient registered successfully.');
    }

    public function edit(Patient $patient)
    {
        // Obtiene todos los hospitales y triages para el formulario de edición
        $hospitals = Hospital::all();
        $triages = Triage::all();
        return Inertia::render('Patients/editP', [ // Asegúrate de que la capitalización sea correcta
            'patient' => $patient,
            'hospitals' => $hospitals,
            'triages' => $triages,
        ]);
    }

    public function update(Request $request, Patient $patient)
    {
        // Valida los datos del formulario antes de actualizar
        $request->validate([
            'name' => 'required',
            'age' => 'required|integer',
            'gender' => 'required',
            'symptoms' => 'required',
            'hospital_id' => 'required|exists:hospitals,id',
            'triage_id' => 'nullable|exists:triages,id',
        ]);

        // Actualiza los datos del paciente
        $patient->update($request->all());
        return redirect()->route('patients.index')->with('success', 'Patient updated successfully.');
    }

    public function destroy(Patient $patient)
    {
        // Elimina el paciente
        $patient->delete();
        return redirect()->route('patients.index')->with('success', 'Patient deleted successfully.');
    }
}
