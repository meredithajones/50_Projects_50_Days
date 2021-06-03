const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

function generateJoke() {
    const config = {
    //Adding headers to accept values as JSON rather than HTML
    headers: {
        Accept: 'application/json',
        }
    }

    //using fetch to access the joke API
    fetch('https://icanhazdadjoke.com', config)
    .then((res) => res.json())
    .then((data) => {
    // console.log(data.joke))
    jokeEl.innerHTML = data.joke
})
}