const Ship = require("./ship");

function Gameboard() {
  const grid = [];
  const placedShips = [];

  for (let i = 0; i < 10; i++) {
    const row = [];
    for (let k = 0; k < 10; k++) {
      row.push(null);
    }
    grid.push(row);
  }

  return {
    placeShip(Ship, x, y, orientation) {
      if (orientation === 'vertical') {
        for (let i = 0; i < Ship.getLength(); i++) {
          grid[y + i][x] = Ship;
        }
      }
      else if (orientation === 'horizontal') {
        for (let i = 0; i < Ship.getLength(); i++) {
          grid[y][x + i] = Ship;
        }
      }
      placedShips.push(Ship);
    },
    receiveAttack(x, y) {
      const target = grid[y][x];
      if (target === 'miss' || target === 'hit') {
        return false;
      }

      if (target === null) {
        grid[y][x] = 'miss';
        return true;
      }
      target.hit();
      grid[y][x] = 'hit';
      return true;
    },
    grid() {
      return grid;
    },
    allSunk() {
      for (let i = 0; i < placedShips.length; i++) {
        const ship = placedShips[i];
        if (ship.isSunk() === false) {
          return false;
        }
      }
      return true;
    }
  };
}

module.exports = Gameboard;