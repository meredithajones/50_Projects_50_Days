const imgs = document.getElementById('imgs')
const rightButton = document.getElementById('right')
const leftButton = document.getElementById('left')

const photo = document.querySelectorAll('#imgs img')

let idx = 0 

let interval = setInterval(run, 2000)


function run() {
    idx++
    changeImage()
}

function changeImage() {
    if(idx > photo.length -1) {
        idx = 0
    } else if(idx < 0) {
        idx = photo.length -1
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`
}

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 2000)
}

rightButton.addEventListener('click', () => {
    idx++
    changeImage()
    resetInterval()
})