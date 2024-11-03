import React from 'react';
import { Link } from '@inertiajs/react';
import logo from '../../Images/logo.png'; // Asegúrate de que esta ruta sea correcta

const Welcome = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-blue-50">
            <div className="bg-white rounded-lg shadow-lg p-16 max-w-2xl text-center"> {/* Cambiado a max-w-2xl para más ancho */}
                <img src={logo} alt="Logo de Sistema de Triage" className="w-64 mx-auto mb-6" />
                <h1 className="text-5xl font-bold text-blue-600 mb-6">Sistema de Triage Hospitalario</h1>
                <p className="text-xl text-gray-700 mb-8">Bienvenido al sistema de triage para hospitales públicos a nivel nacional.</p>
                <div className="flex justify-between space-x-6">
                    <Link 
                        href="/login" 
                        className="inline-block px-8 py-4 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300 text-lg"
                    >
                        Iniciar sesión
                    </Link>
                    <Link 
                        href="/register" 
                        className="inline-block px-8 py-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 text-lg"
                    >
                        Registrarse
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Welcome;
