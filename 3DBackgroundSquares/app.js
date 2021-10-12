const boxesContainer = document.getElementById('boxes');
const btn = document.getElementById('btn');

function createBoxes() {
    for(let i =0; 1 < 4; i++) {
        for (let j = 0; j <4; j++) {
            // creating boxes with loops
            const box = document.createElement('div');
            box.classList.add('box');
            // Using a template literal to position boxes
            box.style.backgroundPosition = `${-j * 125} ${-i * 125}`
            boxesContainer.appendChild(box)
        }
    }
}

createBoxes();