import { Router, Application } from 'express';
import { CandidatesController } from '../controllers/candidatesController';

const router = Router();

export function setCandidatesRoutes(app: Application) {
    const controller = new CandidatesController();

    app.use('/candidates', router);
    router.get('/', controller.getCandidates.bind(controller));
    router.post('/vote', controller.voteForCandidate.bind(controller));
}