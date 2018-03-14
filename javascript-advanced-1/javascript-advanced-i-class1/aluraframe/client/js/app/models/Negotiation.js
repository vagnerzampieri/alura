class Negotiation {
    constructor(date, quantity, amount) {
        this._date = new Date(date.getTime());
        this._quantity = quantity;
        this._amount = amount;
        Object.freeze(this);
    }

    get volume() {
        return this._quantity * this._amount;
    }

    get date() {
        return new Date(this._date.getTime());
    }

    get quantity() {
        return this._quantity;
    }

    get amount() {
        return this._amount;
    }
}