// console.log("UI layer only — game logic lives in src/");

const Player = require("../src/player");

const user = Player("Human");
const computer = Player("AI");

const playerBoardUI = document.getElementById('player-board')
const computerBoardUI = document.getElementById('computer-board')

function renderBoard(boardInstance, containerElement, isEnemy) {
    containerElement.innerHTML = '';
    console.log(containerElement);
    const grid = boardInstance.board.grid();

    for (let y = 0; y < 10; y++) {
        for (let x = 0; x < 10; x++) {
            const square = document.createElement('div');
            square.classList.add('square');

            if (isEnemy) {                
                square.addEventListener('click', () => handleAttack(x,y));
            }

            containerElement.appendChild(square);
        }
    }
    
}


renderBoard(user, playerBoardUI, false);
renderBoard(computer, computerBoardUI, true);