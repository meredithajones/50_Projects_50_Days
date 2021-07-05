function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}



function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
    return String.fromCharCode(Math.floor(Math.random() * 15) + 33)
}

    console.log(getRandomSymbol());