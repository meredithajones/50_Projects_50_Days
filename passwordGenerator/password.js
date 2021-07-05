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
    const hasSymbol = symbolsEl.checked

    resultEl.innerText = generatePassword(hasLower, hasNumber, hasSymbol, hasUpper, length);
    
})

function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = ''
    const typesCount = lower + upper + number + symbol
    const typesArray = [{lower}, {upper}, {number}, {symbol}].
    // using .filter to remove anything in the array with false as a value
    filter(item => Object.values(item)[0])

    if(typesCount <= 1) {
        return 'Please select at least two character types'
    }

    for(let i = 0; i < length; i += typesCount) {
        typesArray.forEach(type => {
            const functionName = Object.keys(type)[0]
                generatedPassword += randomGen[functionName]()
            })

        }
        const finalPassword = generatedPassword.slice(0, length)

        return finalPassword
}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}


function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
    return String.fromCharCode(Math.floor(Math.random() * 7) + 58)
}
