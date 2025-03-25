import { Request, Response } from 'express';

interface Candidate {
    id: string;
    name: string;
    votes: number;
}

const candidates: Candidate[] = []; // In-memory storage for candidates

export class CandidatesController {
    getCandidates(req: Request, res: Response) {
        res.json(candidates);
    }

    voteForCandidate(req: Request, res: Response) {
        const { candidateId } = req.body;
        const candidate = candidates.find(c => c.id === candidateId);

        if (!candidate) {
            return res.status(404).json({ message: 'Candidate not found' });
        }

        candidate.votes += 1;
        res.json({ message: 'Vote recorded', candidate });
    }

    uploadCandidate(req: Request, res: Response) {
        const { id, name } = req.body;

        if (!id || !name) {
            return res.status(400).json({ message: 'ID and name are required' });
        }

        const existingCandidate = candidates.find(c => c.id === id);
        if (existingCandidate) {
            return res.status(400).json({ message: 'Candidate with this ID already exists' });
        }

        const newCandidate: Candidate = { id, name, votes: 0 };
        candidates.push(newCandidate);

        res.status(201).json({ message: 'Candidate uploaded', candidate: newCandidate });
    }
}