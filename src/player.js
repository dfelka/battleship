const Gameboard = require("./gameboard");

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

  
  return {
    name,
    board,
    attack,
    computerMove
  };
}

module.exports = Player;