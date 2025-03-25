import { CandidatesController } from '../controllers/candidatesController';
import { Application } from 'express';

export function setCandidatesRoutes(app: Application) {
    const controller = new CandidatesController();

    app.get('/candidates', controller.getCandidates);
    app.post('/candidates/vote', controller.voteForCandidate);
    app.post('/candidates/upload', controller.uploadCandidate); // New route
}