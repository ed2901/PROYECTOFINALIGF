import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Link } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />

            <div className="min-h-screen bg-blue-50 py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-center mb-8 text-blue-800">Welcome to the Triage System</h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Tarjeta para Hospitales */}
                        <Link 
                            href={route('hospitals.index')} 
                            className="block p-8 bg-white text-gray-800 rounded-lg border border-blue-200 shadow-md hover:shadow-lg transition duration-300"
                        >
                            <h3 className="text-xl font-semibold text-blue-600">Hospitals</h3>
                            <p className="mt-2 text-gray-600">Manage hospitals and view their details.</p>
                        </Link>

                        {/* Tarjeta para Pacientes */}
                        <Link 
                            href={route('patients.index')} 
                            className="block p-8 bg-white text-gray-800 rounded-lg border border-blue-200 shadow-md hover:shadow-lg transition duration-300"
                        >
                            <h3 className="text-xl font-semibold text-blue-600">Patients</h3>
                            <p className="mt-2 text-gray-600">View and manage patient information.</p>
                        </Link>

                        {/* Tarjeta para Triages */}
                        <Link 
                            href={route('triages.index')} 
                            className="block p-8 bg-white text-gray-800 rounded-lg border border-blue-200 shadow-md hover:shadow-lg transition duration-300"
                        >
                            <h3 className="text-xl font-semibold text-blue-600">Triages</h3>
                            <p className="mt-2 text-gray-600">Manage triage codes and view triage details.</p>
                        </Link>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
