const Gameboard = require('./gameboard');

test('gameboard exists', () => {
  const board = Gameboard();
  expect(board).toBeTruthy();
});