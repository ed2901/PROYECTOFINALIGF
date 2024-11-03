import React, { useEffect } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { useForm } from '@inertiajs/inertia-react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link } from '@inertiajs/react';

const EditHospital = ({ hospital }) => {
    const { data, setData, put, processing, errors } = useForm({
        name: hospital.name || '',
        address: hospital.address || '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(`/hospitals/${hospital.id}`); // Asegúrate de que la ruta sea correcta
    };

    useEffect(() => {
        setData({
            name: hospital.name,
            address: hospital.address,
        });
    }, [hospital]);

    return (
        <GuestLayout>
            <Head title="Editar Hospital" />
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Editar Hospital</h1>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <InputLabel htmlFor="name" value="Nombre del Hospital" />
                    <TextInput
                        id="name"
                        type="text"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />
                    <InputError message={errors.name} className="mt-2" />
                </div>
                <div className="mb-4">
                    <InputLabel htmlFor="address" value="Dirección" />
                    <TextInput
                        id="address"
                        type="text"
                        name="address"
                        value={data.address}
                        className="mt-1 block w-full"
                        onChange={(e) => setData('address', e.target.value)}
                        required
                    />
                    <InputError message={errors.address} className="mt-2" />
                </div>
                <div className="flex items-center justify-between">
                    <PrimaryButton className="bg-blue-600 hover:bg-blue-700" disabled={processing}>
                        {processing ? 'Actualizando...' : 'Actualizar Hospital'}
                    </PrimaryButton>
                    <Link href="/hospitals" className="text-gray-600 hover:text-gray-800 underline ms-4">
                        Cancelar
                    </Link>
                </div>
            </form>
        </GuestLayout>
    );
};

export default EditHospital;