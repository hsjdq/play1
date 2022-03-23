const gameContainer = document.querySelector('.container');
const allMoleItems = document.querySelectorAll('.item');
let startGame, startTime, countDown = 20, score = 0;

const timeCount = document.getElementById('time-count');
const scoreCount = document.getElementById('score-count');

gameContainer.addEventListener('click', function(e){
    if(e.target.classList.contains('mole-clicked')){
        score++;
        scoreCount.innerHTML = score;

        const bushElem = e.target.parentElement.previousElementSibling;

        let textEl = document.createElement('span');
        textEl.setAttribute('class', 'whack-text');
        textEl.innerHTML = "whack!";
        bushElem.appendChild(textEl);

        setTimeout(() => {
            textEl.remove();
        }, 300);
    }
})

document.addEventListener('DOMContentLoaded', () => {
    // общее время игры 20 секунд
    startTime = setInterval(() => {
        timeCount.innerHTML = countDown;
        countDown--;
    }, 1000);

    startGame = setInterval(() => {
        showMole();
    }, 600);
});

//показывает Mole
function showMole(){
    if(countDown <= 0){
        clearInterval(startGame);
        clearInterval(startTime);
        timeCount.innerHTML = "0";
    }
    let moleToAppear = allMoleItems[getRandomValue()].querySelector('.mole');
    moleToAppear.classList.add('mole-appear');
    hideMole(moleToAppear);
    
}

function getRandomValue(){
    let rand = Math.random() * allMoleItems.length;
    return Math.floor(rand);
}

// скрыть Mole
function hideMole(moleItem){
    setTimeout(() => {
        moleItem.classList.remove('mole-appear');
    }, 1000);
} 