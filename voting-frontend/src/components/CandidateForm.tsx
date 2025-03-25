import React, { useState } from 'react';
import { uploadCandidate } from '../api';

const CandidateForm: React.FC = () => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await uploadCandidate(id, name);
        alert('Candidate uploaded successfully!');
        setId('');
        setName('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Upload Candidate</h2>
            <input
                type="text"
                placeholder="ID"
                value={id}
                onChange={(e) => setId(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <button type="submit">Upload</button>
        </form>
    );
};

export default CandidateForm;