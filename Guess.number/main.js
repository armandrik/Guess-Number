const gameArea = document.querySelector('.game');
const button = document.querySelector('button');
const message = document.querySelector('.message');
const gameOver = document.getElementById('gameOver');
let gamePlay = false;
let score = 0;
button.addEventListener('click', function () {
    if (!gamePlay) {
        gamePlay = true;
        gameArea.innerHTML = "";
        message.innerHTML = "Guess Combo";
        score = 0;
        maker(5);
        button.innerHTML = "CHEK Combo";
        gameOver.innerHTML = "";
    }
    else {
        const numbers = document.querySelectorAll('.numb');
        score++;
        message.innerHTML = "Guesses : " + score;
        let winCondition = 0;
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i].value == numbers[i].correct) {
                numbers[i].style.backgroundColor = "#4aff77";
                numbers[i].style.color = "white";
                winCondition++;
            }
            else {
                if (numbers[i].value < numbers[i].correct) {
                    numbers[i].style.backgroundColor = "#4a9bff";
                }
                else {
                    numbers[i].style.backgroundColor = "#dbff57";
                }
            }
            if (winCondition == numbers.length) {
                gameOver.innerHTML = "GAME OVER";
                gameEnd();
            }
        }
    };
})

function maker(num) {
    for (let x = 0; x < num; x++) {
        let el = document.createElement('input');
        el.setAttribute('type', 'number');
        el.max = 9;
        el.min = 0;
        el.correct = Math.floor(Math.random() * 10);
        el.value = 0;
        el.classList.add('numb');
        el.size = 1;
        el.width = "20px";
        el.order = 1;
        el.style.fontSize = "1.5em";
        el.style.paddingLeft = "13px";
        gameArea.appendChild(el);
        //console.log(el);
    };
}

function gameEnd() {
    message.innerHTML = "You solved the combo " + score + " Guesses";
    button.innerHTML = "Reset Game";
    gamePlay = false;
}