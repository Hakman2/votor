"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CandidatesController = void 0;
class CandidatesController {
    constructor() {
        this.candidates = [];
        this.candidates = [];
    }
    getCandidates(req, res) {
        res.json(this.candidates);
    }
    voteForCandidate(req, res) {
        const candidateId = req.params.id;
        const candidate = this.candidates.find(c => c.id === candidateId);
        if (candidate) {
            candidate.votes += 1;
            res.status(200).json({ message: 'Vote cast successfully', candidate });
        }
        else {
            res.status(404).json({ message: 'Candidate not found' });
        }
    }
}
exports.CandidatesController = CandidatesController;
