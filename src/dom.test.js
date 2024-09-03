/**
 * @jest-environment jsdom
 */
import DOM from './dom';

describe('DOM module', () => {
  beforeEach(() => {
    // Set up the initial DOM state if necessary
    document.body.innerHTML = ''; // Clear the document body before each test
    DOM.init(); // Initialize the DOM
  });

  afterEach(() => {
    // Clean up after each test if necessary
    document.body.innerHTML = ''; // Clear the document body after each test
  });

  test('init() sets up the initial game UI correctly', () => {
    // Check that necessary DOM elements are created
    expect(document.querySelector('.real-board-container')).not.toBeNull();
    expect(document.querySelector('.computer-board-container')).not.toBeNull();
    expect(document.querySelector('.start-game-btn')).not.toBeNull();
    expect(document.querySelector('.reset-game-btn')).not.toBeNull();
  });

  test('renderBoard() renders the board correctly', () => {
    const mockBoard = [
      ['', '', 'hit'],
      ['miss', '', ''],
      ['hit', 'miss', ''],
    ];

    DOM.renderBoard(mockBoard, 'real');

    // Check if board is rendered correctly
    const playerBoard = document.querySelector('.real-board');
    expect(playerBoard).not.toBeNull();

    // Check specific cell states
    const cells = playerBoard.querySelectorAll('.board-cell');
    expect(cells.length).toBe(9);
    expect(cells[0].classList.contains('cell-occupied')).toBe(false);
    expect(cells[2].classList.contains('cell-hit')).toBe(true);
    expect(cells[3].classList.contains('cell-miss')).toBe(true);
  });

  test('startGame() initializes the game correctly', () => {
    // Simulate button click to start the game
    const startButton = document.querySelector('.start-game-btn');
    startButton.click();

    // Check if the game object is initialized
    expect(DOM.game).not.toBeNull();
    expect(DOM.game.player).not.toBeNull();
    expect(DOM.game.computer).not.toBeNull();

    // Check if boards are rendered correctly
    expect(document.querySelector('.real-board')).not.toBeNull();
    expect(document.querySelector('.computer-board')).not.toBeNull();
  });

  test('handleBoardClick() triggers player attack correctly', () => {
    // Mock the game object
    DOM.game = {
      playTurn: jest.fn(),
    };

    // Simulate a click event
    const cell = document.createElement('div');
    cell.dataset.row = '1';
    cell.dataset.col = '1';
    DOM.handleBoardClick({ target: cell });

    // Check if playTurn is called with correct arguments
    expect(DOM.game.playTurn).toHaveBeenCalledWith(1, 1);
  });

  test('resetGame() resets the game and DOM correctly', () => {
    // Simulate button click to reset the game
    const resetButton = document.querySelector('.reset-game-btn');
    resetButton.click();

    // Check if DOM is reset
    expect(document.querySelector('.real-board-container').innerHTML).toBe('');
    expect(document.querySelector('.computer-board-container').innerHTML).toBe(
      ''
    );

    // Check if game state is reset
    expect(DOM.game).toBeNull();
  });
});
