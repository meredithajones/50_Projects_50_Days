const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages = [
    'Horray!',
    'Great Job!',
    'You Did It!',
    'Keep Up The Great Work!',
]

button.addEventListener('click', () => createNotification())

function createNotification() {
    const notify = document.createElement('div')
    notify.classList.add('toast')

    notify.innerText = getRandomMessage()

    toasts.appendChild(notify)

    setTimeout(() => {
        notify.remove()
    }, 3000)
}

function getRandomMessage(){
    return messages[Math.floor(Math.random() * messages.length)
    ]
}