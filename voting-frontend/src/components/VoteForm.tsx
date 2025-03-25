import React, { useState } from 'react';
import { voteForCandidate } from '../api';

const VoteForm: React.FC = () => {
    const [candidateId, setCandidateId] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await voteForCandidate(candidateId);
        alert('Vote recorded successfully!');
        setCandidateId('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Vote for Candidate</h2>
            <input
                type="text"
                placeholder="Candidate ID"
                value={candidateId}
                onChange={(e) => setCandidateId(e.target.value)}
                required
            />
            <button type="submit">Vote</button>
        </form>
    );
};

export default VoteForm;