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
  });
});
