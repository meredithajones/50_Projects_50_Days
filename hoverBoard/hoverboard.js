const container = document.getElementById('container')
const colors = [ '#FAF562', '#85EF47', '#8BFFFF', '#EA168E', '#00D1FF', '#FF7A5A', '#A100FF', '#FF0000' ]
const SQUARES = 500

for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor (square))
    square.addEventListener('mouseout', () => removeColor (square))

    container.appendChild(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.background = `black`
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}