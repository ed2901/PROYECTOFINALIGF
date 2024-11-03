import React from 'react';
import { Link, usePage } from '@inertiajs/react';
import { Inertia } from '@inertiajs/inertia';

const TriageIndex = () => {
    const { triages } = usePage().props;

    // Método para manejar la eliminación del triage
    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this triage? This action cannot be undone.')) {
            Inertia.delete(`/triages/${id}`);
        }
    };

    return (
        <div className="container mx-auto p-6 bg-gray-50 rounded-lg shadow-md">
            {/* Menú superior a la derecha */}
            <nav className="bg-white shadow-md mb-6">
                <div className="max-w-7xl mx-auto px-4 py-3 flex justify-end">
                    <div className="flex space-x-4">
                        <Link href="/hospitals" className="text-gray-700 hover:bg-blue-200 px-3 py-2 rounded-md">Hospitals</Link>
                        <Link href="/patients" className="text-gray-700 hover:bg-blue-200 px-3 py-2 rounded-md">Patients</Link>
                        <Link href="/triages" className="text-gray-700 hover:bg-blue-200 px-3 py-2 rounded-md">Triages</Link>
                        <Link href="/dashboard" className="text-gray-700 hover:bg-blue-200 px-3 py-2 rounded-md">Dashboard</Link>
                    </div>
                </div>
            </nav>

            <h1 className="text-3xl font-semibold text-gray-800 mb-6">Triage Management</h1>
            <Link href="/triages/create" className="mb-4 inline-flex items-center px-5 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300">
                Add Triage
            </Link>
            <table className="min-w-full bg-white border rounded-lg shadow-sm overflow-hidden">
                <thead>
                    <tr className="bg-blue-200 text-gray-700 uppercase text-sm leading-normal">
                        <th className="py-3 px-6 text-left">ID</th>
                        <th className="py-3 px-6 text-left">Code</th>
                        <th className="py-3 px-6 text-left">Description</th>
                        <th className="py-3 px-6 text-left">Priority Level</th>
                        <th className="py-3 px-6 text-center">Actions</th>
                    </tr>
                </thead>
                <tbody className="text-gray-700 text-sm font-light">
                    {Array.isArray(triages) && triages.length > 0 ? (
                        triages.map(triage => (
                            <tr key={triage.id} className="border-b border-gray-200 hover:bg-blue-50">
                                <td className="py-3 px-6 text-left">{triage.id}</td>
                                <td className="py-3 px-6 text-left">{triage.code}</td>
                                <td className="py-3 px-6 text-left">{triage.description}</td>
                                <td className="py-3 px-6 text-left">{triage.priority_level}</td>
                                <td className="py-3 px-6 text-center">
                                    <Link href={`/triages/${triage.id}/edit`} className="inline-flex items-center px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 mr-2">
                                        Edit
                                    </Link>
                                    <button
                                        className="inline-flex items-center px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-300"
                                        onClick={() => handleDelete(triage.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" className="text-center py-3 text-gray-500">No triages found.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default TriageIndex;
