console.clear();

const firstInput = document.querySelector('[data-js="firstValue"]');
const secondInput = document.querySelector('[data-js="secondValue"]');
const result = document.querySelector('[data-js="result"]');

firstInput.addEventListener("input", (e) => {
multiply()
})



secondInput.addEventListener("input", (e) => {
    multiply()
})

function multiply() {
    const firstValue = firstInput.value;
     const secondValue = secondInput.value;
     // console.log(firstValue, secondValue)
     const endValue = firstValue * secondValue;
result.textContent = endValue
    //  console.log(endValue);
}

