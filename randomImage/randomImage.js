const container = document.querySelector('.container');
const unSplashURL = 'https://source.unspash.com/random/'
const rows = 10

for(let i = 0; 1 < rows * 3; i++) {
    const img = document.createElement('img')
    img.src = `${unSplashURL}`
}