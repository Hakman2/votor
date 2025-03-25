export class CandidatesController {
    private candidates: any[] = [];

    constructor() {
        this.candidates = [];
    }

    public getCandidates(req: any, res: any): void {
        res.json(this.candidates);
    }

    public voteForCandidate(req: any, res: any): void {
        const candidateId = req.params.id;
        const candidate = this.candidates.find(c => c.id === candidateId);
        
        if (candidate) {
            candidate.votes += 1;
            res.status(200).json({ message: 'Vote cast successfully', candidate });
        } else {
            res.status(404).json({ message: 'Candidate not found' });
        }
    }
}