const labels = document.querySelectorAll(".form-control label")

labels.forEach(label => {
    label.innerHTML = label.innerText
    .split('')
    // Using .map to turn our current array into an array of letters
    .map((letter, idx) => <span>${letter}</span>)
})