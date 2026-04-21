const Player = require("./player");
const Ship = require("./ship");

const user = Player("Human");
const computer = Player("AI");

const myCarrier = Ship(5)
user.board.placeShip(myCarrier, 0, 3, 'horizontal'); 

const computerCarrier = Ship(5)
computer.board.placeShip(computerCarrier, 5, 3, 'vertical');

const playerBoardUI = document.getElementById('player-board');
const computerBoardUI = document.getElementById('computer-board');

function handleAttack(x, y) {
    const hit = user.attack(computer.board, x, y);
    
    renderBoard(computer, computerBoardUI, true);

    if (computer.board.allSunk()) {
        alert("You win!");
        return;
    }

    setTimeout(() => {
        computer.computerMove(user.board);
        renderBoard(user, playerBoardUI, false);

        if (user.board.allSunk()) {
            alert("AI wins!");
        }
    }, 500);
}

function renderBoard(boardInstance, containerElement, isEnemy) {
    containerElement.innerHTML = '';
    const grid = boardInstance.board.grid();

    for (let y = 0; y < 10; y++) {
        for (let x = 0; x < 10; x++) {
            const square = document.createElement('div');
            square.classList.add('square');

            const cell = grid[y][x];
            if (cell === 'miss') {
                square.classList.add('miss');
            } else if (cell === 'hit') {
                square.classList.add('hit');
            } else if (cell !== null && !isEnemy) {
                square.classList.add('ship');
            }

            if (isEnemy) {                
                square.addEventListener('click', () => handleAttack(x, y), { once: true });
            }

            containerElement.appendChild(square);
        }
    }
}

renderBoard(user, playerBoardUI, false);
renderBoard(computer, computerBoardUI, true);