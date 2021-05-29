// Using querySelectorAll to put boxes into a node list
const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

function checkBoxes() {
    console.log(window.innerHeight) 
}