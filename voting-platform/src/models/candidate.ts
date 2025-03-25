export class Candidate {
    id: number;
    name: string;
    votes: number;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
        this.votes = 0;
    }

    incrementVotes() {
        this.votes++;
    }
}