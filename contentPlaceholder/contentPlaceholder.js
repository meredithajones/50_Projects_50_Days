const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const authName = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_text = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1574802366240-696d5309e51b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1006&q=80" alt="image of jellyfish" />'
    title.innerHTML = 'Lorem ipsum dolor sit amet consectetur.'
    excerpt.innerHTML = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, minima.'
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/med/women/75.jpg" alt="" /> '
    authName.innerHTML = 'K. Doe'
    date.innerHTML = 'June 22, 2021'

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
}