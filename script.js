const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1

// Adding event listner to next button 
next.addEventListener('click', () => {
    currentActive++
// making sure that it will not go beyond the number of circles.
    if(currentActive > circles.length) {
        currentActive = circles.length
    }
        update()

})

prev.addEventListener('click', () => {
    currentActive--
// making sure that it will not go beyond the number of circles.
    if(currentActive < 1) {
        currentActive = 1
    }

        update()
})

function update() {
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    }
    )
}