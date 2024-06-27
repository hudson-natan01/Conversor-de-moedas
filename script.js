const convertButton = document.querySelector(".convert-button")
const currencyToConvert = document.querySelector(".second-select")
const currencyToConverted = document.querySelector(".first-select")

function convertValues(){

  const inputCurrencyValue = document.querySelector(".input-currency").value
  const firstCoin = document.querySelector(".first-coin")
  const secondCoin = document.querySelector(".second-coin")

  const realPdolar = 0.18
  const realPeuro = 0.17
  const realPlibra= 0.14
  //valores para moeda real

  const dolarPreal = 5.52
  const dolarPeuro = 0.93
  const dolarPlibra = 0.79
  //valores para moeda dolar

  const libraPreal =  6.98
  const libraPdolar = 1.26
  const libraPeuro =  1.18
  //valores para moeda libra

  const euroPreal =  5.89
  const euroPdolar = 1.07
  const euroPlibra =  0.85
//valores para moeda euro

  if(currencyToConverted.value == "real" & currencyToConvert.value == "dolar"){

    const convertedValue = realPdolar * inputCurrencyValue

    firstCoin.innerHTML = new Intl.NumberFormat("pt-BR", {
      style:"currency",
      currency:"BRL"
    }).format(inputCurrencyValue)

    secondCoin.innerHTML = new Intl.NumberFormat("en-US", {
      style:"currency",
      currency:"USD"
    }).format(convertedValue)

}

if(currencyToConverted.value == "real" & currencyToConvert.value == "euro"){

  const convertedValue = realPeuro * inputCurrencyValue

  firstCoin.innerHTML = new Intl.NumberFormat("pt-BR", {
    style:"currency",
    currency:"BRL"
  }).format(inputCurrencyValue)

  secondCoin.innerHTML = new Intl.NumberFormat("de-DE", {
    style:"currency",
    currency:"EUR"
  }).format(convertedValue)
}

if(currencyToConverted.value == "real" & currencyToConvert.value == "libra"){

  const convertedValue =  realPlibra * inputCurrencyValue

  firstCoin.innerHTML = new Intl.NumberFormat("pt-BR", {
    style:"currency",
    currency:"BRL"
  }).format(inputCurrencyValue)

  secondCoin.innerHTML = new Intl.NumberFormat("en-GB",{
    style:"currency",
    currency:"GBP"
  }).format(convertedValue)
}

if(currencyToConverted.value == "real" & currencyToConvert.value == "real"){

  firstCoin.innerHTML = new Intl.NumberFormat("pt-BR", {
    style:"currency",
    currency:"BRL"
  }).format(inputCurrencyValue)

  secondCoin.innerHTML = new Intl.NumberFormat("pt-BR", {
    style:"currency",
    currency:"BRL"
  }).format(inputCurrencyValue)
}
//conversõo de moedas em real


if(currencyToConverted.value == "dolar" & currencyToConvert.value == "real"){

  const convertedValue =  dolarPreal * inputCurrencyValue

  firstCoin.innerHTML = new Intl.NumberFormat("en-US", {
    style:"currency",
    currency:"USD"
  }).format(inputCurrencyValue)

  secondCoin.innerHTML = new Intl.NumberFormat("pt-BR", {
    style:"currency",
    currency:"BRL"
  }).format(convertedValue)
}

if(currencyToConverted.value == "dolar" & currencyToConvert.value == "euro"){
  const convertedValue = dolarPeuro * inputCurrencyValue

  firstCoin.innerHTML = new Intl.NumberFormat("en-US",{
    style:"currency",
    currency:"USD"
  }).format(inputCurrencyValue)

  secondCoin.innerHTML = new Intl.NumberFormat("de-DE", {
    style:"currency",
    currency:"EUR"
  }).format(convertedValue)
}

if(currencyToConverted.value == "dolar" & currencyToConvert.value == "libra"){
  const convertedValue = dolarPlibra * inputCurrencyValue

  firstCoin.innerHTML = new Intl.NumberFormat("en-Us", {
    style:"currency",
    currency:"USD"
  }).format(inputCurrencyValue)

  secondCoin.innerHTML = new Intl.NumberFormat("en-GB",{
    style:"currency",
    currency:"GBP"
  }).format(convertedValue)
}

if(currencyToConverted.value == "dolar" & currencyToConvert.value == "dolar"){

  firstCoin.innerHTML = new Intl.NumberFormat("en-Us", {
    style:"currency",
    currency:"USD"
  }).format(inputCurrencyValue)

  secondCoin.innerHTML = new Intl.NumberFormat("en-Us", {
    style:"currency",
    currency:"USD"
  }).format(inputCurrencyValue)
}

//conversão de moedas em dolar


if(currencyToConverted.value == "libra" & currencyToConvert.value == "euro"){

  const convertedValue = libraPeuro * inputCurrencyValue

  firstCoin.innerHTML = new Intl.NumberFormat("en-GB", {
    style:"currency",
    currency:"GBP"
  }).format(inputCurrencyValue)

  secondCoin.innerHTML = new Intl.NumberFormat("de-De",{
    style:"currency",
    currency:"EUR"
  }).format(convertedValue)
}

if(currencyToConverted.value == "libra" & currencyToConvert.value =="real"){

  const convertedValue = libraPreal * inputCurrencyValue

  firstCoin.innerHTML = new Intl.NumberFormat("en-GB", {
    style:"currency",
    currency:"GBP"
  }).format(inputCurrencyValue)

  secondCoin.innerHTML = new Intl.NumberFormat("pt-Br",{
    style:"currency",
    currency:"BRL"
  }).format(convertedValue)
}

if(currencyToConverted.value == "libra" & currencyToConvert.value == "dolar"){

  const convertedValue = libraPdolar * inputCurrencyValue

  firstCoin.innerHTML = new Intl.NumberFormat("en-GB", {
    style:"currency",
    currency:"GBP"
  }).format(inputCurrencyValue)

  secondCoin.innerHTML = new Intl.NumberFormat("en-Us",{
    style:"currency",
    currency:"USD"
  }).format(convertedValue)
}

if(currencyToConverted.value == "libra" & currencyToConvert.value == "libra"){

  firstCoin.innerHTML = new Intl.NumberFormat("en-GB", {
    style:"currency",
    currency:"GBP"
  }).format(inputCurrencyValue)

  secondCoin.innerHTML = new Intl.NumberFormat("en-GB", {
    style:"currency",
    currency:"GBP"
  }).format(inputCurrencyValue)
}
//conversão de moedas em libra


if(currencyToConverted.value == "euro" & currencyToConvert.value == "real"){

  const convertedValue = euroPreal * inputCurrencyValue

  firstCoin.innerHTML = new Intl.NumberFormat("de-De",{
    style:"currency",
    currency:"EUR"
  }).format(inputCurrencyValue)

  secondCoin.innerHTML = new Intl.NumberFormat("pt-Br",{
    style:"currency",
    currency:"BRL"
  }).format(convertedValue)
}

if(currencyToConverted.value == "euro" & currencyToConvert.value == "dolar"){

  const convertedValue = euroPdolar * inputCurrencyValue

  firstCoin.innerHTML = new Intl.NumberFormat("de-De",{
    style:"currency",
    currency:"EUR"
  }).format(inputCurrencyValue)

  secondCoin.innerHTML = new Intl.NumberFormat("en-Us",{
    style:"currency",
    currency:"USD"
  }).format(convertedValue)
}

if(currencyToConverted.value == "euro" & currencyToConvert.value == "libra"){
  const convertedValue = euroPlibra * inputCurrencyValue

  firstCoin.innerHTML = new Intl.NumberFormat("de-DE",{
    style:"currency",
    currency:"EUR"
  }).format(inputCurrencyValue)

  secondCoin.innerHTML = new Intl.NumberFormat("en-GB",{
    style:"currency",
    currency:"GBP"
  }).format(convertedValue)
}

if(currencyToConverted.value == "euro" & currencyToConvert.value == "euro"){

  firstCoin.innerHTML = new Intl.NumberFormat("de-DE",{
    style:"currency",
    currency:"EUR"
  }).format(inputCurrencyValue)

  secondCoin.innerHTML = new Intl.NumberFormat("de-DE",{
    style:"currency",
    currency:"EUR"
  }).format(inputCurrencyValue)
}
}
//conversão de moedas em euro

function currencyExchange(){

  const firstFlag = document.querySelector(".primeiraBandeira")
  const firstCurrency = document.querySelector(".first-currency")

  if(currencyToConverted.value == "real"){

    firstFlag.src = "./assets/real.png"
    firstCurrency.innerHTML = "Real Brasileiro"
  }

  if(currencyToConverted.value == "dolar"){

    firstFlag.src = "./assets/bandeira eua.webp"
    firstCurrency.innerHTML = "Dolar Americano"
  }

  if(currencyToConverted.value == "euro"){

    firstFlag.src = "./assets/euro.png"
    firstCurrency.innerHTML = "Euro"
  }

  if(currencyToConverted.value == "libra"){

    firstFlag.src = "./assets/libra.png"
    firstCurrency.innerHTML = "Libra Esterlina"
  }

  convertValues()
}

function secondCurrencyExchange(){

  const secondFlag = document.querySelector(".segundaBandeira")
  const secondCurrency = document.querySelector(".second-currency")

  if(currencyToConvert.value == "dolar"){
    secondFlag.src = "./assets/bandeira eua.webp"
    secondCurrency.innerHTML = "Dolar Americano"
  }

  if(currencyToConvert.value == "real"){
    secondFlag.src = "./assets/real.png"
    secondCurrency.innerHTML = "Real Brasileiro"
  }

  if(currencyToConvert.value == "euro"){
    secondFlag.src = "./assets/euro.png"
    secondCurrency.innerHTML = "Euro"
  }

  if(currencyToConvert.value == "libra"){
    secondFlag.src = "./assets/libra.png"
    secondCurrency.innerHTML = "Libra Esterlina"
  }

  convertValues()
}

currencyToConvert.addEventListener("change", secondCurrencyExchange)
currencyToConverted.addEventListener("change",currencyExchange)
convertButton.addEventListener("click", convertValues)