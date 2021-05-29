// Using querySelectorAll to put boxes into a node list
const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4; 

    // Using getBoundingClientRect to return DOMRect object,
    // providing info about the size of element and its 
    //position relative to the viewport.
    boxes.forEach(box =>{
        const boxTop = box.getBoundingClientRect().top 

        if(boxTop < triggerBottom) {
            box.classList.add('show') 
        } else {
            box.classList.remove('show');
        }

    })
}