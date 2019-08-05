const { prettifyRow, prettifyBoard, generateStartingBoard, updateBoard } = require('../lib/board');

describe('prettifyRow', () => {
  it('should return a row with seperators given an array of 3 characters', () => {
    const stringArray = ['X', 'X', 'O'];
    const result = prettifyRow(stringArray);
    expect(result).toBe(' X | X | O ');
  });
  it('should return a rows with seperators given an array of 4 characters', () => {
    const stringArray = ['X', 'X', 'O', 'X'];
    const result = prettifyRow(stringArray);
    expect(result).toBe(' X | X | O | X ');
  });
  it('should return rows if there are multiple characters', () => {
    const stringArray = ['Xxxxxx', '', '', 'X'];
    const result = prettifyRow(stringArray);
    expect(result).toBe(' Xxxxxx |  |  | X ');
  });
  it('should return rows if there are multiple characters', () => {
    const stringArray = ['', '', ''];
    const result = prettifyRow(stringArray);
    expect(result).toBe('  |  |  ');
  });
});

describe('prettifyBoard', () => {
  it('should return a stringified version of our board', () => {
    const boardArray = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
    const result = prettifyBoard(boardArray);
    expect(result).toBe('   |   |   \n---|---|---\n   |   |   \n---|---|---\n   |   |   ');
  });
  it('should return an extra line if theres a 4d', () => {
    const boardArray = [[' ', ' ', ' ', ' '], [' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ']];
    const result = prettifyBoard(boardArray);
    expect(result).toBe('   |   |   |   \n---|---|---\n   |   |   |   \n---|---|---\n   |   |   |   ');
  });
  it('should return an extra line if theres a 4d', () => {
    const boardArray = [['', '', ''], ['', '', ''], ['', '', '']];
    const result = prettifyBoard(boardArray);
    expect(result).toBe('  |  |  \n---|---|---\n  |  |  \n---|---|---\n  |  |  ');
  });
});

describe('generateStartingBoard', () => {
  it('should generate a 3 x 3 board array', () => {
    const result = generateStartingBoard();
    expect(result).toEqual([[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']]);
  });
});

describe('updateBoard', () => {
  it('should update a board with a players move', () => {
    const board = generateStartingBoard();
    const selectedSquare = [2, 2];
    const player = 'X';
    const result = updateBoard(board, selectedSquare, player);
    expect(result).toEqual([[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', 'X']]);
  });
  it('should overwrite a player if the spots already taken', () => {
    const board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', 'X']];
    const selectedSquare = [2, 2];
    const player = 'O';
    const result = updateBoard(board, selectedSquare, player);
    expect(result).toEqual([[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', 'O']]);
  });
});
