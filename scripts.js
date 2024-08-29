
const buttonConverter = document.querySelector(".botaoconverter")
const currencySelect = document.querySelector(".currency-select")

function buttonClicado () {
   const inputValue = document.querySelector(".input-value").value
   const valorInput = document.querySelector(".currency-value-to-converted")
   const valorConvertido = document.querySelector(".currency-value")



   const dolarToDay = 5.35
   const euroToday = 6.35
   const libraToDay = 6.83


   if (currencySelect.value == "dolar") {
      valorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "USD"
      }).format(inputValue / dolarToDay)

   }
   if (currencySelect.value == "euro") {
      valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
         style: "currency",
         currency: "EUR"
      }).format(inputValue / euroToday)
   }

   if (currencySelect.value == "libra") {
      valorConvertido.innerHTML = new Intl.NumberFormat("en-GB", {
         style: "currency",
         currency: "GBP"
      }).format(inputValue / libraToDay)
   }

   valorInput.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
   }).format(inputValue)

}



function trocandoMoeda () {
   const texto = document.querySelector(".currency-change")
   const img = document.getElementById("currency-logo")

   if (currencySelect.value == "dolar") {
      texto.innerHTML = "Dolar Americano"
      img.src = "./assets/img/dolar.png"
   }

   if (currencySelect.value == "euro") {
      texto.innerHTML = "Euro"
      img.src = "./assets/img/euro.png"
   }

   if (currencySelect.value == "libra") {
      texto.innerHTML = "Libras"
      img.src = "./assets/img/libra.png"
   }

   

}


currencySelect.addEventListener("change", trocandoMoeda)
buttonConverter.addEventListener("click", buttonClicado)