const convertButton = document.querySelector(".convert-button")

function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-value").value
    const currencyValuetoConvert = document.querySelector(".currency-value-to-convert")  // valor em real
    const currencyValueConvert = document.querySelector(".currency-value") // outras moedas 

    const dolarToday = 5.2

    const convertValues = inputCurrencyValue / dolarToday

    currencyValuetoConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style:"currency",
        currency:"BRL"
    }).format(inputCurrencyValue)

    currencyValueConvert.innerHTML = new Intl.NumberFormat("en-US",{
        style:"currency",
        currency:"USD"
    }).format(convertValues)
}
//Intl.NumberFormat = corringindo  valores das moedas


convertButton.addEventListener("click", convertValues)