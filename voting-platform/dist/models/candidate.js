"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Candidate = void 0;
class Candidate {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.votes = 0;
    }
    incrementVotes() {
        this.votes++;
    }
}
exports.Candidate = Candidate;
