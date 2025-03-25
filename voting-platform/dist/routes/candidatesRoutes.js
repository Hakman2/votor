"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCandidatesRoutes = setCandidatesRoutes;
const express_1 = require("express");
const candidatesController_1 = require("../controllers/candidatesController");
const router = (0, express_1.Router)();
function setCandidatesRoutes(app) {
    const controller = new candidatesController_1.CandidatesController();
    app.use('/candidates', router);
    router.get('/', controller.getCandidates.bind(controller));
    router.post('/vote', controller.voteForCandidate.bind(controller));
}
