export class VotingService {
    private votes: Map<number, number>;

    constructor() {
        this.votes = new Map<number, number>();
    }

    public castVote(candidateId: number): void {
        const currentVotes = this.votes.get(candidateId) || 0;
        this.votes.set(candidateId, currentVotes + 1);
    }

    public getVoteCount(candidateId: number): number {
        return this.votes.get(candidateId) || 0;
    }
}