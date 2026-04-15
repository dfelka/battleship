const Player = require('./player');

test('Player exists', () => {
  const board = Player();
  expect(board).toBeTruthy();
});