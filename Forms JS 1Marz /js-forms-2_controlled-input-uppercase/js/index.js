console.clear();

const input = document.querySelector('[data-js="toUpperCase"]');

input.addEventListener("input", (event) => {
    input.value = input.value.toUppercase();
});

// input.value = event.target.value.toUppercase();