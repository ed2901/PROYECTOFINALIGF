import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

const PatientsCreate = ({ hospitals, triages }) => {
    const [identifier, setIdentifier] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('Male');
    const [symptoms, setSymptoms] = useState('');
    const [hospitalId, setHospitalId] = useState('');
    const [triageId, setTriageId] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await Inertia.post('/patients', {
                identifier,
                name,
                age,
                gender,
                symptoms,
                hospital_id: hospitalId,
                triage_id: triageId,
            });
        } catch (error) {
            console.error('Error creating patient:', error);
        }
    };

    return (
        <div className="container">
            <h1>Add Patient</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="identifier">Identifier (xxxxxxxx-x)</label>
                    <input
                        type="text"
                        className="form-control"
                        name="identifier"
                        value={identifier}
                        onChange={e => setIdentifier(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="age">Age</label>
                    <input
                        type="number"
                        className="form-control"
                        name="age"
                        value={age}
                        onChange={e => setAge(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="gender">Gender</label>
                    <select
                        className="form-control"
                        name="gender"
                        value={gender}
                        onChange={e => setGender(e.target.value)}
                        required
                    >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="symptoms">Symptoms</label>
                    <textarea
                        className="form-control"
                        name="symptoms"
                        value={symptoms}
                        onChange={e => setSymptoms(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="hospital">Hospital</label>
                    <select
                        className="form-control"
                        name="hospital"
                        value={hospitalId}
                        onChange={e => setHospitalId(e.target.value)}
                        required
                    >
                        <option value="">Select a hospital</option>
                        {hospitals.map(hospital => (
                            <option key={hospital.id} value={hospital.id}>{hospital.name}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="triage">Triage</label>
                    <select
                        className="form-control"
                        name="triage"
                        value={triageId}
                        onChange={e => setTriageId(e.target.value)}
                    >
                        <option value="">Select a triage</option>
                        {triages.map(triage => (
                            <option key={triage.id} value={triage.id}>{triage.code}</option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Create Patient</button>
            </form>

            <style jsx>{`
                .container {
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
                    background-color: #fff;
                }
                h1 {
                    text-align: center;
                    color: #333;
                }
                .form-group {
                    margin-bottom: 15px;
                }
                label {
                    font-weight: bold;
                    color: #444;
                }
                input, textarea, select {
                    width: 100%;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                    transition: border-color 0.3s;
                }
                input:focus, textarea:focus, select:focus {
                    border-color: #007bff;
                    outline: none;
                }
                button {
                    width: 100%;
                    padding: 10px;
                    background-color: #007bff;
                    color: white;
                    border: none;
                    border-radius: 4px;
                    font-size: 16px;
                    cursor: pointer;
                }
                button:hover {
                    background-color: #0056b3;
                }
            `}</style>
        </div>
    );
};

export default PatientsCreate;
