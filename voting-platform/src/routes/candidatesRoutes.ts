import { Router } from 'express';
import CandidatesController from '../controllers/candidatesController';

const router = Router();
const candidatesController = new CandidatesController();

export function setCandidatesRoutes(app) {
    app.use('/candidates', router);
    router.get('/', candidatesController.getCandidates.bind(candidatesController));
    router.post('/vote', candidatesController.voteForCandidate.bind(candidatesController));
}