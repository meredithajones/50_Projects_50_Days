const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const randomGen = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

generateEl.addEventListener('click', () => {
    const length = +lengthEl.value
    const hasLower = lowercaseEl.checked
    const hasUpper = uppercaseEl.checked
    const hasNumber = numbersEl.checked
    const hassymbol = symbolsEl.checked

    resultEl.innerText = generatePassword(hasLower, hasNumber, hassymbol, hasUpper);
    
})

function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = ''
    const typesCount = lower + upper + number + symbol
    const typesArray = [{lower}, {upper}, {number}, {symbol}].
    // using .filter to remove anything in the array with false as a value
    filter(item => Object.values(item) [0])

    if(typesCount === 0) {
        return ''
    }

    
    console.log(typesArray)
}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 65) + 97)
}


function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
    return String.fromCharCode(Math.floor(Math.random() * 15) + 33)
}
