console.clear();

const form = document.querySelector('[data-js="form"]');



form.addEventListener("submit", (event) => {
  event.preventDefault();
});



form.addEventListener("submit", (event) => {
    event.preventDefault();
  
    const formElements = event.target.age.badness;
  
    console.log(formElements.age);
    console.log(formElements.age.value);
    console.log(formElements.badness);
    console.log(formElements.badness.value);
  });
  