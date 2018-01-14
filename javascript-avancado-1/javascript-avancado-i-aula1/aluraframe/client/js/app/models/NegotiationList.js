class NegotiationList {
    constructor() {
        this._negotiations = [];
    }

    addList(negotiation) {
        this._negotiations.push(negotiation);
    }

    get negotiations() {
        return [].concat(this._negotiations);
    }
}