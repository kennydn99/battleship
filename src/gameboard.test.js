import Gameboard from './gameboard';
import Ship from './ship';

describe('Gameboard Class', () => {
  let gameboard;

  beforeEach(() => {
    gameboard = new Gameboard(); // Create a new ship instance with a length of 3 before each test
  });

  test('Gameboard class is defined', () => {
    expect(gameboard).toBeDefined();
  });

  test('Gameboard places ships horizontally on the board', () => {
    const ship = new Ship(3);
    gameboard.placeShip(ship, 0, 0, true);
    expect(gameboard.board[0][0]).toBe(ship);
    expect(gameboard.board[0][1]).toBe(ship);
    expect(gameboard.board[0][2]).toBe(ship);
  });

  test('Gameboard places ships vertically on the board', () => {
    const ship = new Ship(3);
    gameboard.placeShip(ship, 0, 0, false);
    expect(gameboard.board[0][0]).toBe(ship);
    expect(gameboard.board[1][0]).toBe(ship);
    expect(gameboard.board[2][0]).toBe(ship);
  });

  test('Gameboard throws Error when placing ship out of bounds horizontally', () => {
    const ship = new Ship(3);
    expect(() => gameboard.placeShip(ship, 1, 8, true)).toThrow(
      'Not a valid position!'
    );
  });

  test('Gameboard throws Error when placing ship out of bounds vertically', () => {
    const ship = new Ship(3);
    expect(() => gameboard.placeShip(ship, 8, 1, false)).toThrow(
      'Not a valid position!'
    );
  });

  test('Gameboard throws Error when placing ship on an already occupoed cell horizontally', () => {
    const ship1 = new Ship(3);
    const ship2 = new Ship(2);
    gameboard.placeShip(ship1, 1, 1, true);
    expect(() => gameboard.placeShip(ship2, 1, 1, true)).toThrow(
      'Not a valid position!'
    );
  });

  test('Gameboard throws Error when placing ship on an already occupoed cell vertically', () => {
    const ship1 = new Ship(3);
    const ship2 = new Ship(2);
    gameboard.placeShip(ship1, 1, 1, false);
    expect(() => gameboard.placeShip(ship2, 1, 1, false)).toThrow(
      'Not a valid position!'
    );
  });
});
