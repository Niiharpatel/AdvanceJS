
function convertCurrency() {
    var amount = parseFloat(document.getElementById('amount').value);
    var fromCurrency = document.getElementById('fromCurrency').value;
    var toCurrency = document.getElementById('toCurrency').value;
    var convertedAmount;

    // Conversion rates
    var conversionRates = {

        IND: {
            USD: 0.012,
            EUR: 0.011,
            GBP: 0.0095
        },
        USD: {
            EUR: 0.84,
            GBP: 0.72,
            IND: 82.74
        },
        EUR: {
            USD: 1.19,
            GBP: 0.86,
            IND: 90.03
        },
        GBP: {
            USD: 1.39,
            EUR: 1.17,
            IND: 105.37
        }
    };

    if (fromCurrency === toCurrency) {
        convertedAmount = amount;
    } else {
        convertedAmount = amount * conversionRates[fromCurrency][toCurrency];
    }

    document.getElementById('result').textContent = convertedAmount.toFixed(3) + ' ' + toCurrency;
}
