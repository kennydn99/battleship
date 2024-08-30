import Player from './player';
import Ship from './ship';

describe('Player Class', () => {
  test('Player class is defined', () => {
    const player = new Player();
    expect(player).toBeDefined();
  });

  test('Player initializes with the correct type and a gameboard', () => {
    const player = new Player('real');
    expect(player.getType()).toBe('real');
    expect(player.gameboard).toBeDefined();
  });

  test('Player can attack opponent gameboard', () => {
    const player1 = new Player('real');
    const player2 = new Player('real');

    const ship = new Ship(3);
    player2.gameboard.placeShip(ship, 0, 0, true);

    // Perform an attack that should hit
    player1.attack(player2, 0, 0);
    expect(player2.gameboard.board[0][0]).toBe('hit');

    // Perform an attack that should miss
    player1.attack(player2, 1, 1);
    expect(player2.gameboard.board[1][1]).toBe('miss');
  });
});
