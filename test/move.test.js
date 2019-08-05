const readlineSync = require('readline-sync');
// let { displayError } = require('./ui');
const { validateMove, getValidMoveFromPlayer } = require('../lib/move');

describe('validateMove', () => {
  it('should turn the move string into a tuple', () => {
    const move = '1 1';
    const board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
    const result = validateMove(move, board);
    expect(result).toEqual([1, 1]);
  });
  it('should throw an error if input has incorrect syntax', () => {
    const move = '1';
    const board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
    expect(() => validateMove(move, board)).toThrow('Invalid move! Move must have syntax "row col"');
  });
  it.todo('should throw a expected substring error if input is a thruple');
  it('should throw an error if the move is out of bounds', () => {
    const move = '3 4';
    const board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
    expect(() => validateMove(move, board)).toThrow('Invalid move! Move must be in bounds of board');
  });
  it('should throw an error if the space is already occupied', () => {
    const move = '2 2';
    const board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', 'X']];
    expect(() => validateMove(move, board)).toThrow('Invalid move! This space is already occupied');
  });
});

jest.mock('readline-sync');
describe('getValidMoveFromPlayer', () => {
  it('should return a tuple of move coordinates', () => {
    readlineSync.question.mockReturnValueOnce('1 1');
    const board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', 'X']];
    const result = getValidMoveFromPlayer(board);
    expect(result).toEqual([1, 1]);
  });
  it.todo('should be prompting a user for an input');
  // it('should display an error if there is an invalid input', () => {
  //   displayError = jest.fn();
  //   const board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', 'X']];
  //   readlineSync.question.mockReturnValueOnce('1');
  //   readlineSync.question.mockReturnValueOnce('1 1');
  //   const result = getValidMoveFromPlayer(board);
  //   expect(displayError).toBeCalledTimes(1);
  //   expect(result).toEqual([1, 1]);
  // });
});
