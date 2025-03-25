export interface Candidate {
    id: string;
    name: string;
    votes: number;
}

export interface Vote {
    candidateId: string;
    voterId: string;
}