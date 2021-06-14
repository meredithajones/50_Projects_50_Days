const body = document.body 
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('.left')
const rightBtn = document.getElementById('.right')

left activeSlide = 0;

function setBackgroundToBody() {
    body.style.backgroundImage = slides[activeSlide].style.
    backgroundImage
}