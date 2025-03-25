import React, { useEffect, useState } from 'react';
import { getCandidates } from '../api';

interface Candidate {
    id: string;
    name: string;
    votes: number;
}

const CandidateList: React.FC = () => {
    const [candidates, setCandidates] = useState<Candidate[]>([]);

    useEffect(() => {
        const fetchCandidates = async () => {
            const data = await getCandidates();
            setCandidates(data);
        };
        fetchCandidates();
    }, []);

    return (
        <div>
            <h2>Candidate List</h2>
            <ul>
                {candidates.map(candidate => (
                    <li key={candidate.id}>
                        {candidate.name} - Votes: {candidate.votes}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CandidateList;