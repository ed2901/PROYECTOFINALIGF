import React from 'react';
import { Link, usePage } from '@inertiajs/react';
import { Inertia } from '@inertiajs/inertia';

const PatientsIndex = () => {
    const { patients } = usePage().props;

    // Crear un método para manejar la eliminación del paciente
    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this patient? This action cannot be undone.')) {
            Inertia.delete(`/patients/${id}`);
        }
    };

    return (
        <div>
            {/* Barra de Menú con fondo blanco y alineada a la derecha */}
            <nav className="bg-white shadow-md p-4 mb-4"> {/* Agregar mb-4 para margen inferior */}
                <div className="container mx-auto flex justify-end">
                    <ul className="flex space-x-4">
                        <li>
                            <Link href="/dashboard" className="text-gray-800 hover:underline">Dashboard</Link> {/* Cambiar Home por Dashboard */}
                        </li>
                        <li>
                            <Link href="/patients" className="text-gray-800 hover:underline">Patients</Link>
                        </li>
                        <li>
                            <Link href="/hospitals" className="text-gray-800 hover:underline">Hospitals</Link>
                        </li>
                        <li>
                            <Link href="/triages" className="text-gray-800 hover:underline">Triages</Link>
                        </li>
                        {/* Agrega más enlaces según sea necesario */}
                    </ul>
                </div>
            </nav>

            <div className="container mx-auto p-6 bg-gray-50 rounded-lg shadow-md mt-4">
                <h1 className="text-3xl font-semibold text-gray-800 mb-6">Patients Management</h1>
                <Link
                    href="/patients/create"
                    className="mb-4 inline-flex items-center px-5 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300"
                >
                    Add Patient
                </Link>
                <table className="min-w-full bg-white border rounded-lg shadow-sm overflow-hidden">
                    <thead>
                        <tr className="bg-blue-200 text-gray-700 uppercase text-sm leading-normal">
                            <th className="py-3 px-6 text-left">ID</th>
                            <th className="py-3 px-6 text-left">Identifier</th>
                            <th className="py-3 px-6 text-left">Name</th>
                            <th className="py-3 px-6 text-left">Age</th>
                            <th className="py-3 px-6 text-left">Gender</th>
                            <th className="py-3 px-6 text-left">Symptoms</th>
                            <th className="py-3 px-6 text-left">Hospital</th>
                            <th className="py-3 px-6 text-left">Triage</th>
                            <th className="py-3 px-6 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700 text-sm font-light">
                        {patients.length > 0 ? (
                            patients.map(patient => (
                                <tr key={patient.id} className="border-b border-gray-200 hover:bg-blue-50">
                                    <td className="py-3 px-6 text-left">{patient.id}</td>
                                    <td className="py-3 px-6 text-left">{patient.identifier}</td>
                                    <td className="py-3 px-6 text-left">{patient.name}</td>
                                    <td className="py-3 px-6 text-left">{patient.age}</td>
                                    <td className="py-3 px-6 text-left">{patient.gender}</td>
                                    <td className="py-3 px-6 text-left">{patient.symptoms}</td>
                                    <td className="py-3 px-6 text-left">{patient.hospital.name}</td>
                                    <td className="py-3 px-6 text-left">{patient.triage ? patient.triage.code : 'N/A'}</td>
                                    <td className="py-3 px-6 text-center">
                                        <Link
                                            href={`/patients/edit/${patient.id}`}
                                            className="inline-flex items-center px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 mr-2"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            className="inline-flex items-center px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-300"
                                            onClick={() => handleDelete(patient.id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="9" className="text-center py-3 text-gray-500">No patients found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PatientsIndex;
