class DateHelper {
    constructor() {
        throw new Error("Only static methods");
    }

    static textToDate(text) {
        return new Date(text.slice('-'));
    }
}