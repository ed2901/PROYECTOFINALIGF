<?php

namespace App\Http\Controllers;

use App\Models\Triage;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TriageController extends Controller
{
    public function index()
    {
        $triages = Triage::all();
        return Inertia::render('Triages/indexT', ['triages' => $triages]);
    }

    public function create()
    {
        return Inertia::render('Triages/createT');
    }

    public function store(Request $request)
    {
        $request->validate([
            'code' => 'required|unique:triages',
            'description' => 'required',
            'priority_level' => 'required|integer',
        ]);

        Triage::create($request->all());
        return redirect()->route('triages.index')->with('success', 'Triage creado con éxito.');
    }

    public function edit(Triage $triage)
    {
        return Inertia::render('Triages/editT', ['triage' => $triage]);
    }

    public function update(Request $request, Triage $triage)
    {
        $request->validate([
            'code' => 'required|unique:triages,code,' . $triage->id,
            'description' => 'required',
            'priority_level' => 'required|integer',
        ]);

        $triage->update($request->all());
        return redirect()->route('triages.index')->with('success', 'Triage actualizado con éxito.');
    }

    public function destroy(Triage $triage)
    {
        $triage->delete();
        return redirect()->route('triages.index')->with('success', 'Triage eliminado con éxito.');
    }
}
