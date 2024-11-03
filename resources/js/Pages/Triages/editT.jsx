import React, { useEffect } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { useForm } from '@inertiajs/inertia-react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, usePage } from '@inertiajs/react';

const TriageEdit = () => {
    const { id } = usePage().props; // Obtiene el ID directamente de las props
    const { data, setData, put, processing, errors } = useForm({
        code: '',
        description: '',
        priority_level: '',
    });

    useEffect(() => {
        const fetchTriage = async () => {
            const response = await fetch(`/triages/${id}`);
            const data = await response.json();
            setData(data); // Establece los datos del triage recuperado
        };
        fetchTriage();
    }, [id, setData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        put(`/triages/${id}`); // Asegúrate de que la ruta sea correcta
    };

    return (
        <GuestLayout>
            <Head title="Editar Código de Triage" />
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Editar Código de Triage</h1>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <InputLabel htmlFor="code" value="Código de Triage" />
                    <TextInput
                        id="code"
                        type="text"
                        name="code"
                        value={data.code}
                        className="mt-1 block w-full"
                        onChange={(e) => setData('code', e.target.value)}
                        required
                    />
                    <InputError message={errors.code} className="mt-2" />
                </div>
                <div className="mb-4">
                    <InputLabel htmlFor="description" value="Descripción" />
                    <textarea
                        id="description"
                        name="description"
                        value={data.description}
                        onChange={(e) => setData('description', e.target.value)}
                        className="mt-1 block w-full border rounded-lg p-2"
                        required
                    />
                    <InputError message={errors.description} className="mt-2" />
                </div>
                <div className="mb-4">
                    <InputLabel htmlFor="priority_level" value="Nivel de Prioridad" />
                    <TextInput
                        id="priority_level"
                        type="number"
                        name="priority_level"
                        value={data.priority_level}
                        className="mt-1 block w-full"
                        onChange={(e) => setData('priority_level', e.target.value)}
                        required
                    />
                    <InputError message={errors.priority_level} className="mt-2" />
                </div>
                <div className="flex items-center justify-between">
                    <PrimaryButton className="bg-blue-600 hover:bg-blue-700" disabled={processing}>
                        {processing ? 'Actualizando...' : 'Actualizar Código de Triage'}
                    </PrimaryButton>
                    <Link href="/triages" className="text-gray-600 hover:text-gray-800 underline">
                        Cancelar
                    </Link>
                </div>
            </form>
        </GuestLayout>
    );
};

export default TriageEdit;
