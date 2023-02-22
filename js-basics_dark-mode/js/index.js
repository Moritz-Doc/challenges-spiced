console.clear();

var bodyElement = document.querySelector('[data-js="body"]');

var buttonToTurnDark = document.querySelector("button.button--dark");

buttonToTurnDark.addEventListener("click", () => {
    bodyElement.classList.add("dark");
})

var buttonToTurnBackLight = document.querySelector("button.button--light");

buttonToTurnBackLight.addEventListener("click", () => {
    bodyElement.classList.remove("dark");
})

var toggleLightAndDark = document.querySelector("button.button--toggle");

toggleLightAndDark.addEventListener("click", () => {
    bodyElement.classList.toggle("dark");
})