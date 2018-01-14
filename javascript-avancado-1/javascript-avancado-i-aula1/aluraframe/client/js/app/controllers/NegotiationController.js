class NegotiationController {
    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputDate = $('#date');
        this._inputQuantity = $('#quantity');
        this._inputAmount = $('#amount');
        this._negotiationList = new NegotiationList();
    }

    addNegotiation(e) {
        e.preventDefault();

        this._negotiationList.addList(this._createNegotiation());
        this._cleanForm();

        console.log(this._negotiationList.negotiations);
    }

    _createNegotiation() {
        return new Negotiation(
            DateHelper.textToDate(this._inputDate.value),
            this._inputQuantity.value,
            this._inputAmount.value
        );
    }

    _cleanForm() {
        this._inputDate.value = '';
        this._inputQuantity.value = 1;
        this._inputDate.value = 0.0;
        this._inputDate.focus();
    }
}