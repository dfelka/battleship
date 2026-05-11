const Player = require("./player");
const Ship = require("./ship");

const user = Player("Human");
const computer = Player("AI");

let isGameOver = false;
let canPlayerMove = true;

user.placeFleet();
computer.placeFleet();

// console.log(computer.board.placedShips().length)

const playerBoardUI = document.getElementById('player-board');
const computerBoardUI = document.getElementById('computer-board');

function handleAttack(x, y) {
    // If the game is over or it's the AI's turn, do nothing
    if (isGameOver || !canPlayerMove) return;

    const hit = user.attack(computer.board, x, y);
    
    // If the player clicked a square they already hit, don't let the AI move
    if (!hit) return; 

    renderBoard(computer, computerBoardUI, true);

    if (computer.board.allSunk()) {
        isGameOver = true;
        alert("You win!");
        return;
    }

    canPlayerMove = false; // "Close the gate"

    setTimeout(() => {
        computer.computerMove(user.board);
        renderBoard(user, playerBoardUI, false);

        if (user.board.allSunk()) {
            isGameOver = true;
            alert("AI wins!");
        }
        
        canPlayerMove = true; // "Open the gate" for the next turn
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
                square.addEventListener('click', () => handleAttack(x, y));
            }

            containerElement.appendChild(square);
        }
    }
}

renderBoard(user, playerBoardUI, false);
renderBoard(computer, computerBoardUI, true);