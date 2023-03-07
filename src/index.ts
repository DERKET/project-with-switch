import { multy } from "./app";

function init() {
    let form = document.querySelector("form");
    form?.addEventListener("submit", submitHandler);
  }

  function submitHandler(e: Event) {
    e.preventDefault();
    let num1 = document.querySelector("input[name='firstnumber']") as HTMLInputElement;
    let num2 = document.querySelector("input[name='secondnumber']") as HTMLInputElement;
    let result = multy(Number(num1.value), Number(num2.value));
    let resultElement = document.querySelector("p");
    if (resultElement) {
      resultElement.textContent = result.toString();
    }
  }

  init();