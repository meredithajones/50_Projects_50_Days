const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1

// Adding event listner to next button 
next.addEventListener('click', () => {
    currentActive++
})