const inputYear = document.getElementById('taxYear')
const inputIncome = document.getElementById('taxableIncome')
const inputChurchTax = document.getElementById('churchTax')
const inputTaxSplitNo = document.getElementById('splitNo')
const inputTaxSplitYes = document.getElementById('splitYes')

function taxYear() {
    console.log(Number(inputYear.value))
}

function taxableIncome() {
    console.log(Number(inputIncome.value))
}

function ChurchTax() {
    console.log(Number(inputChurchTax.value))
}

function TaxSplitNo() {
    console.log(inputTaxSplitNo.checked)
}

function TaxSplitYes() {
    console.log(inputTaxSplitYes.checked)
}


/* 
Hinweis für die Ausgabe des Ergebnises
https://developer.mozilla.org/de/docs/Web/API/Document/createElement 
*/
