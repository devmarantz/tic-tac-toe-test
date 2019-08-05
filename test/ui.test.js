const { displayTurn, displayWin, displayTie, displayError } = require('../lib/ui');

describe('displayTurn', () => {
  it('should print out board and display current player', () => {
    console.log = jest.fn();
    const board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
    const player = 'X';
    displayTurn(board, player);
    expect(console.log).toBeCalledTimes(2);
    expect(console.log).toBeCalledWith('   |   |   \n---|---|---\n   |   |   \n---|---|---\n   |   |   ');
    expect(console.log).toBeCalledWith(`${player} it is your turn`);
    console.log.mockClear();
  });
});

describe('displayWin', () => {
  it('should print out board and congratulate winner', () => {
    console.log = jest.fn();
    const board = [['O', 'X', ' '], [' ', 'X', ' '], [' ', 'X', 'O']];
    const player = 'X';
    displayWin(board, player);
    expect(console.log).toBeCalledTimes(2);
    expect(console.log).toBeCalledWith(' O | X |   \n---|---|---\n   | X |   \n---|---|---\n   | X | O ');
    expect(console.log).toBeCalledWith(`Congratulations! ${player} wins`);

    console.log.mockClear();
  });
});

describe('displayTie', () => {
  it.todo('should print out a board and say its a tie', () => {
    console.log = jest.fn();
  });
});

describe('displayError', () => {
  it.todo('should display an error message', () => {
    console.log = jest.fn();
  });
});
