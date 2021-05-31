const labels = document.querySelectorAll(".form-control label")

labels.forEach(label => {
    label.innerHTML = label.innerText
    // splitting the inner html into an array, so each letter has its own item in array
    .split('')
    // Using .map to turn our current array into an array of letters with span around it
    .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
    // using .join to turn array back into a string
    .join('')
});