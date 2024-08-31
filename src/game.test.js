import Game from './game';

describe('Game Class', () => {
  let game;
  beforeEach(() => {
    game = new Game();
  });
  test('Game class is defined', () => {
    expect(game).toBeDefined();
  });

  test('Game startGame() intitalizes players, gameboards, and sets up initial state', () => {
    game.startGame();
    expect(game.player).toBeDefined();
    expect(game.computer).toBeDefined();
    expect(game.currentTurn).toBe(game.player);
  });

  test('Game should handle player attack and switch turns', () => {
    game.startGame();

    // Simulate a player attack
    game.playTurn(0, 0);

    // Check if the turn switched to the computer
    expect(game.currentTurn).toBe(game.computer);
  });

  test('Game should handle computer attack and switch turns', () => {
    game.startGame();

    // Simulate a turn where it's the computer's attack
    game.currentTurn = game.computer; // Force set turn to computer
    game.playTurn();

    // Check if the turn switched back to the player
    expect(game.currentTurn).toBe(game.player);
  });

  test('Game should declare game over when all ships are sunk', () => {
    game.startGame();
    game.setupBoards();

    const playerBoard = game.player.gameboard;
    // Simulate sinking all ships of one player
    playerBoard.receiveAttack(0, 0);
    playerBoard.receiveAttack(0, 1);
    playerBoard.receiveAttack(0, 2);

    // Check if the game is over
    expect(game.isGameOver()).toBe(true);
    // Optionally, check if DOM.displayGameOver was called
  });

  test('Game should not declare game over when not all ships are sunk', () => {
    game.startGame();
    game.setupBoards();
    const playerBoard = game.player.gameboard;
    // Simulate sinking all ships of one player
    playerBoard.receiveAttack(0, 0);
    playerBoard.receiveAttack(0, 1);

    // Check if the game is over
    expect(game.isGameOver()).toBe(false);
    // Optionally, check if DOM.displayGameOver was called
  });

  test('Game should correctly identify the winner', () => {
    game.startGame();
    game.setupBoards();
    const playerBoard = game.player.gameboard;
    // Simulate sinking all ships of one player
    playerBoard.receiveAttack(0, 0);
    playerBoard.receiveAttack(0, 1);
    playerBoard.receiveAttack(0, 2);

    // Check if the winner was correctly identified
    expect(game.endGame()).toBe(game.computer);
    // Optionally, check if DOM.displayGameOver was called
  });
});
