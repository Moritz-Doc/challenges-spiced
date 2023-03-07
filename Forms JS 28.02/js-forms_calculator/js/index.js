console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;



  // --v-- write your code here --v--


  const form = document.querySelector('[data-js="form"]');

  form.addEventListener("submit", (event) => {
    event.preventDefault();
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
  
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
  


//const numberA const numberB 

//operator

//`add(a + b)`, `subtract(a - b)`, `multiply(a * b)` `divide(a / b)`.

//`result` variable.


  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
