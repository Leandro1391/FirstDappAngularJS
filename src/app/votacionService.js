
export class votacionService {
    constructor(contract) {
        this.contract = contract;
    }

    async totalVotesFor(candidate, from) {
        return this.contract.totalVotesFor(candidate, { from });
    }

    async voteForCandidate(candidate, from, value) {
        return this.contract.voteForCandidate(candidate, { from, value });
    }

}