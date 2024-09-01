const dom = {
  init() {
    // Clear existing content
    document.body.innerHTML = '';

    // Create heading section
    const heading = document.createElement('div');
    heading.classList.add('heading');
    heading.textContent = 'battlesh!p';
    document.body.appendChild(heading);

    // Create and setup player and computer game boards in the DOM
    const boardContainer = document.createElement('div');
    boardContainer.classList.add('board-container');

    const playerBoardContainer = document.createElement('div');
    playerBoardContainer.classList.add('real-board-container');
    const computerBoardContainer = document.createElement('div');
    computerBoardContainer.classList.add('computer-board-container');

    boardContainer.appendChild(playerBoardContainer);
    boardContainer.appendChild(computerBoardContainer);
    document.body.appendChild(boardContainer);

    // Create game controls
    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('buttons-container');
    const startGame = document.createElement('button');
    startGame.classList.add('start-game-btn');
    startGame.textContent = 'Start Game!';
    buttonsContainer.appendChild(startGame);

    const resetGame = document.createElement('button');
    resetGame.classList.add('reset-game-btn');
    resetGame.textContent = 'Reset Game!';
    buttonsContainer.appendChild(resetGame);
    document.body.appendChild(buttonsContainer);

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
      row.forEach((cell, colIndex) => {
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
