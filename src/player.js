const Gameboard = require("./gameboard");
const Ship = require("./ship");

function Player(name) {
  const board = Gameboard();

  function computerMove(enemyBoard) {
    let success = false;
    while (!success) {
      const x = Math.floor(Math.random() * 10);
      const y = Math.floor(Math.random() * 10);
      
      success = enemyBoard.receiveAttack(x, y);
    }
  }
  
  function attack(enemyBoard, x, y) {
    return enemyBoard.receiveAttack(x, y);
  }

  function placeOnBoard(lenght) {
    let placement = false;
    while (!placement) {
      let x = Math.floor(Math.random() * 10);
      let y = Math.floor(Math.random() * 10);
      let orientation = Math.floor(Math.random() * 2) > 0 ? 'horizontal' : 'vertical';
      placement = board.placeShip(Ship(lenght), x, y, orientation)
    }
  }

  function placeFleet() {
    const fleet = [5, 4, 3, 2, 1];
    fleet.forEach(element => {
      placeOnBoard(element)
    });    
  }

  return {
    name,
    board,
    attack,
    computerMove,
    placeOnBoard,
    placeFleet
  };
}

module.exports = Player;