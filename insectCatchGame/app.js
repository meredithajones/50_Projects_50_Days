const screens = document.querySelectorAll(".screen");
const choose_insect_btns = document.querySelectorAll(".choose-insect-btn");
const game_container = document.getElementById("game-container");
const start_btn = document.getElementById("start-btn");
const timeEL = document.getElementById("time");
const scoreEL = document.getElementById("score");
const message = document.getElementById("message");
let seconds = 0;
let score = 0;
let selected_insect = {};

start_btn.addEventListener("click", () => screens[0].classList.add("up"));

choose_insect_btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const img = btn.querySelector("img");
    const src = img.getAttribute("src");
    const alt = img.getAttribute("alt");
    selected_insect = { src, alt };
    screens[1].classlist.add('up');
    setTimeout(createInsect, 1000);
    startGame();
  });
});

// Inserting insect into the DOM
function createInsect() {
    const insect = document.createElement('div')
    insect.classList.add('insect')
}
