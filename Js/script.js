let amountElement = document.querySelector(".js-amount")
let plnElement = document.querySelector(".js-pln");
let formElement = document.querySelector(".form");
let eurElement = document.querySelector(".js-euro")
let usdElement = document.querySelector(".js-dolary")

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let plnAmount = plnElement.value;
    let usdAmount = usdElement.value;
    let eurAmount = eurElement.value;

    if (eurElement.checked === true) {
        let amounteuro = plnAmount * eurAmount;
        amountElement.innerText = amounteuro.toFixed(2) + " euro"
    } else { 
        let amountusd = plnAmount * usdAmount;
        amountElement.innerText = amountusd.toFixed(2) + " dolarów"
   } 
console.log(plnAmount);
});
