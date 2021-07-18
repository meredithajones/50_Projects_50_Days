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