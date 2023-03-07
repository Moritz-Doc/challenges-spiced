console.clear();

/*
Convert the input value to uppercase when clicking the button

[ ] – Assign the input element to a variable
[ ] – Assign the button element to a variable
[ ] – Add an event listener to the button, so the input value turns into uppercase when the button is clicked

Hint: Access the value by using `.value` on the input element

*/


// transform on every change the input value to uppercase letters
const textInput = document.querySelector('[data-js="first-input"]');
const buttonClick = document.querySelector('[data-js="button-uppercase"]');



buttonClick.addEventListener("click", () => {
    const oldValue = textInput.value;
    const newValue = oldValue.toUpperCase();
    textInput.value = newValue;
  });


  // my code 

  //const form = document.querySelector ('[data-js="form"]')

  //const textInput = document.querySelector('[data-js="textInput"]');
  
  
  //form.addEventListener('click', (event) => {eventPrevent}
      
