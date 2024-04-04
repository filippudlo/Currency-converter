{
  const init = () => {
    const formElement = document.querySelector(".form");

    formElement.addEventListener("submit", (event) => {
      event.preventDefault();

      calculated();
    });
  };
  init();

  const calculated = () => {
    const eurElement = document.querySelector(".js-euro");
    const plnElement = document.querySelector(".js-pln");
    const plnAmount = plnElement.value;
    const amountElement = document.querySelector(".js-amount");

    if (eurElement.checked === true) {
      const amounteuro = plnAmount * 0.23;
      amountElement.innerText = amounteuro.toFixed(2) + " euro";
    } else {
      const amountusd = plnAmount * 0.25;
      amountElement.innerText = amountusd.toFixed(2) + " dolarów";
    }
  };
}
