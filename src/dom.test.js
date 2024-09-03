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
});
