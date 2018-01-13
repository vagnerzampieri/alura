class NegotiationController {
    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputDate = $('#date');
        this._inputQuantity = $('#quantity');
        this._inputAmount = $('#amount');
    }

    addNegotiation(e) {
        e.preventDefault();

        let date = new Date(
            this._inputDate.value.slice('-')
        );

        let negotiation = new Negotiation(
            date,
            this._inputQuantity.value,
            this._inputAmount.value
        );

        console.log(negotiation);
    }
}