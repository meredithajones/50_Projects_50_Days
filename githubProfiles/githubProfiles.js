const APIURL = 'https://api.github.com/users/'

function getUser(username) {
    axios.get(APIURL + username)
    .then(res => console.log(res))
}