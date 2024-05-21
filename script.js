const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencyConvert = document.querySelector(".currency-select")


function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-value").value
    const currencyValuetoConvert = document.querySelector(".currency-value-to-convert")  // valor em real
    const currencyValueConvert = document.querySelector(".currency-value") // outras moedas 

    const dolarToday = 5.1
    const euroToday = 5.5
    const libraToday = 6.4

    if(currencySelect.value == "dolar"){
        currencyValueConvert.innerHTML = new Intl.NumberFormat("en-US",{
            style:"currency",
            currency:"USD",
        }).format(inputCurrencyValue / dolarToday)
    }

    if(currencySelect.value == "euro"){
        currencyValueConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style:"currency",
            currency:"EUR" ,
        }).format(inputCurrencyValue / euroToday)
    }

    currencyValuetoConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style:"currency",
        currency:"BRL"
    }).format(inputCurrencyValue)

    if(currencySelect.value=="libra"){
        currencyValueConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style:"currency",
            currency:"GBP" ,
        }).format(inputCurrencyValue / libraToday)
    }

}


//Intl.NumberFormat = corringindo  valores das moedas

function changeCurrency(){
    const currencyName = document.getElementById("currency-Name")
    const currencyIMG = document.querySelector(".currency-img")

    if(currencySelect.value == "dolar"){
        currencyName.innerHTML = "Dólar"
        currencyIMG.src="assets/usa2.png"
    }
    if(currencySelect.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyIMG.src="assets/euro.png"
    }
    if(currencySelect.value == "libra"){
        currencyName.innerHTML = "Libra"
        currencyIMG.src="assets/libra.png"
    }
    convertValues()
}



currencySelect.addEventListener("change",changeCurrency )
convertButton.addEventListener("click", convertValues)

