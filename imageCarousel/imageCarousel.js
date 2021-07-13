const imgs = document.getElementById('imgs')
const rightButton = document.getElementById('right')
const leftButton = document.getElementById('left')

const photos = document.querySelectorAll('.img')

let idx = 0 

let interval = setInterval(run, 2000)
