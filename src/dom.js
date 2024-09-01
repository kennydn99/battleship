const dom = {
  init() {
    // Clear existing content
    document.body.innerHTML = '';
    // Create and setup player and computer game boards in the DOM
    const playerBoardContainer = document.createElement('div');
    playerBoardContainer.classList.add('real-board-container');
    const computerBoardContainer = document.createElement('div');
    computerBoardContainer.classList.add('computer-board-container');

    document.body.appendChild(playerBoardContainer);
    document.body.appendChild(computerBoardContainer);

    // Create game controls
    const startGame = document.createElement('button');
    startGame.classList.add('start-game-btn');
    startGame.textContent = 'Start Game!';
    document.body.appendChild(startGame);

    const resetGame = document.createElement('button');
    resetGame.classList.add('reset-game-btn');
    resetGame.textContent = 'Reset Game!';
    document.body.appendChild(resetGame);

    // Setup event listeners

    // Display the initial state of the game
    // renderBoard(playerBoard, 'player');
    // renderBoard(computerBoard, 'computer');
  },

  renderBoard(board, playerType) {
    // Create Board Container
    const boardContainer = document.createElement('div');
    boardContainer.classList.add(`${playerType}-board`);

    // Render board cells
    board.forEach((row, rowIndex) => {
      board.forEach((cell, colIndex) => {
        const cellElement = document.createElement('div');
        cellElement.classList.add('board-cell');

        if (cell === 'hit') {
          cellElement.classList.add('cell-hit');
        } else if (cell === 'miss') {
          cellElement.classList.add('cell-miss');
        } else if (cell !== '') {
          cellElement.classList.add('cell-occupied');
        }

        cellElement.dataset.row = rowIndex;
        cellElement.dataset.col = colIndex;

        boardContainer.appendChild(cellElement);
      });
    });

    const parentElement = document.querySelector(
      `.${playerType}-board-container`
    );
    parentElement.innerHTML = ''; // Clear previous content
    parentElement.appendChild(boardContainer);
  },
};

export default dom;
