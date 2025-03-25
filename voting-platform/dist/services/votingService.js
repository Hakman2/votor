"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotingService = void 0;
class VotingService {
    constructor() {
        this.votes = new Map();
    }
    castVote(candidateId) {
        const currentVotes = this.votes.get(candidateId) || 0;
        this.votes.set(candidateId, currentVotes + 1);
    }
    getVoteCount(candidateId) {
        return this.votes.get(candidateId) || 0;
    }
}
exports.VotingService = VotingService;
