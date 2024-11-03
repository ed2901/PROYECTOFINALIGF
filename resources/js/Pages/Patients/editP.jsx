import React, { useState } from 'react';

const Edit = ({ hospital }) => {
    const [name, setName] = useState(hospital.name);
    const [address, setAddress] = useState(hospital.address);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí iría la lógica para enviar el formulario
    };

    return (
        <div className="container">
            <h1>Edit Hospital</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Hospital Name</label>
                    <input type="text" className="form-control" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input type="text" className="form-control" name="address" value={address} onChange={(e) => setAddress(e.target.value)} required />
                </div>
                <button type="submit" className="btn btn-primary">Update Hospital</button>
            </form>
        </div>
    );
};

export default Edit;
