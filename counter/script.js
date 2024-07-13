let counter = document.getElementById("counter");
let increaseBtn = document.getElementById("increase");
let decreaseBtn = document.getElementById("decrease");

function increaseCounter() {
    counter.textContent = parseInt(counter.textContent) + 1;
    play("sfx/increase.mp3");
}

function decreaseCounter() {
    counter.textContent = parseInt(counter.textContent) - 1;
    play("sfx/decrease.mp3");
}
function play(src) {
    const audio = document.getElementById("audio");
    audio.src = src;
    audio.play();
}

increaseBtn.addEventListener("click", increaseCounter);
decreaseBtn.addEventListener("click", decreaseCounter);