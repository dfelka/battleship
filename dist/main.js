/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/gameboard.js"
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{const Ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\r\n\r\nfunction Gameboard() {\r\n  const grid = [];\r\n  const placedShips = [];\r\n\r\n  for (let i = 0; i < 10; i++) {\r\n    const row = [];\r\n    for (let k = 0; k < 10; k++) {\r\n      row.push(null);\r\n    }\r\n    grid.push(row);\r\n  }\r\n\r\n  return {\r\n    placeShip(Ship, x, y, orientation) {\r\n      if (orientation === 'vertical') {\r\n        for (let i = 0; i < Ship.getLength(); i++) {\r\n          grid[y + i][x] = Ship;\r\n        }\r\n      }\r\n      else if (orientation === 'horizontal') {\r\n        for (let i = 0; i < Ship.getLength(); i++) {\r\n          grid[y][x + i] = Ship;\r\n        }\r\n      }\r\n      placedShips.push(Ship);\r\n    },\r\n    receiveAttack(x, y) {\r\n      const target = grid[y][x];\r\n      if (target === 'miss' || target === 'hit') {\r\n        return false;\r\n      }\r\n\r\n      if (target === null) {\r\n        grid[y][x] = 'miss';\r\n        return true;\r\n      }\r\n      target.hit();\r\n      grid[y][x] = 'hit';\r\n      return true;\r\n    },\r\n    grid() {\r\n      return grid;\r\n    },\r\n    allSunk() {\r\n      for (let i = 0; i < placedShips.length; i++) {\r\n        const ship = placedShips[i];\r\n        if (ship.isSunk() === false) {\r\n          return false;\r\n        }\r\n      }\r\n      return true;\r\n    }\r\n  };\r\n}\r\n\r\nmodule.exports = Gameboard;\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("{// console.log(\"UI layer only — game logic lives in src/\");\r\n\r\nconst Player = __webpack_require__(/*! ../src/player */ \"./src/player.js\");\r\n\r\nconst user = Player(\"Human\");\r\nconst computer = Player(\"AI\");\r\n\r\nconst playerBoardUI = document.getElementById('player-board')\r\nconst computerBoardUI = document.getElementById('computer-board')\r\n\r\nfunction renderBoard(boardInstance, containerElement, isEnemy) {\r\n    containerElement.innerHTML = '';\r\n    console.log(containerElement);\r\n    const grid = boardInstance.board.grid();\r\n\r\n    for (let y = 0; y < 10; y++) {\r\n        for (let x = 0; x < 10; x++) {\r\n            const square = document.createElement('div');\r\n            square.classList.add('square');\r\n\r\n            if (isEnemy) {\r\n                square.addEventListener('click', () => handleAttack(x,y));\r\n            }\r\n            \r\n            containerElement.appendChild(square);\r\n        }\r\n    }\r\n    \r\n}\r\n\r\nrenderBoard(user, playerBoardUI, false);\r\nrenderBoard(computer, computerBoardUI, true);\n\n//# sourceURL=webpack://battleship/./src/index.js?\n}");

/***/ },

/***/ "./src/player.js"
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{const Gameboard = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\r\n\r\nfunction Player(name) {\r\n  const board = Gameboard();\r\n\r\n  function computerMove(enemyBoard) {\r\n    let success = false;\r\n    while (!success) {\r\n      const x = Math.floor(Math.random() * 10);\r\n      const y = Math.floor(Math.random() * 10);\r\n      \r\n      success = enemyBoard.receiveAttack(x, y);\r\n    }\r\n  }\r\n\r\n  function attack(enemyBoard, x, y) {\r\n    return enemyBoard.receiveAttack(x, y);\r\n  }\r\n\r\n  return {\r\n    name,\r\n    board,\r\n    attack,\r\n    computerMove\r\n  };\r\n}\r\n\r\nmodule.exports = Player;\n\n//# sourceURL=webpack://battleship/./src/player.js?\n}");

/***/ },

/***/ "./src/ship.js"
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
(module) {

eval("{function Ship(length) {\r\n  let hits = 0;\r\n\r\n  return {\r\n    hit() {\r\n      hits++;\r\n    },\r\n    isSunk() {\r\n      return hits >= length;\r\n    },\r\n    getLength() {\r\n      return length;\r\n    },\r\n    getHits() {\r\n      return hits;\r\n    }\r\n  };\r\n}\r\n\r\nmodule.exports = Ship;\n\n//# sourceURL=webpack://battleship/./src/ship.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;