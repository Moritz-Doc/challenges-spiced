console.clear();

/*

Convert the input value to lowercase when clicking a second button

– [ ] Add a second button to the index.html . It should have a down arrow (&darr;) as text content.
– [ ] Assign the second button to a variable.
– [ ] Add an event listener to the second button and have the input value converted to lowercase when it is clicked.

Hint: Access the value by using `.value` on the input element

*/

const textInput = document.querySelector('[data-js="first-input"]');
const buttonClickUpper = document.querySelector('[data-js="button-uppercase"]');
const buttonClickLower = document.querySelector('[data-js="button-lowercase"]');



buttonClickUpper.addEventListener("click", () => {
    const oldValue = textInput.value;
    const newValue = oldValue.toUpperCase();
    textInput.value = newValue;
  });


  
  buttonClickLower.addEventListener("click", () => {
      const oldValue = textInput.value;
      const newValue = oldValue.toLowerCase();
      textInput.value = newValue;
    });
  




