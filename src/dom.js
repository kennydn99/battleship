import Game from './game';

const dom = {
  game: null,

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
    this.setupButtonEventListeners();
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

  setupButtonEventListeners() {
    const startButton = document.querySelector('.start-game-btn');
    const resetButton = document.querySelector('.reset-game-btn');

    startButton.addEventListener('click', () => this.startGame());
    resetButton.addEventListener('click', () => this.resetGame());
  },

  setupBoardEventListeners() {
    const computerBoardCells = document.querySelectorAll(
      '.computer-board-container .board-cell'
    );

    computerBoardCells.forEach((cell) => {
      cell.addEventListener('click', (event) => this.handleBoardClick(event));
    });
  },

  handleBoardClick(event) {
    const clickedCell = event.target;
    const x = parseInt(clickedCell.dataset.row, 10);
    const y = parseInt(clickedCell.dataset.col, 10);

    // Check if position is already attacked
    const { board } = this.game.computer.gameboard;
    if (board[x][y] === 'hit' || board[x][y] === 'miss') {
      console.log('Position already attacked!');
      return; // Exit early if this position was already attacked
    }
    // Player turn
    this.game.playTurn(x, y);
    this.renderBoard(
      this.game.computer.gameboard.board,
      this.game.computer.type
    );
    clickedCell.removeEventListener('click', this.handleBoardClick);

    // Check if game is over after player turn
    if (this.checkForGameOver()) return;

    // delay computer turn
    setTimeout(() => {
      this.game.playTurn();
      this.renderBoard(this.game.player.gameboard.board, this.game.player.type);
      if (!this.checkForGameOver()) this.setupBoardEventListeners();
    }, 500);
  },

  checkForGameOver() {
    if (this.game.isGameOver()) {
      this.handleGameOver();
      return true; // Return true to indicate the game is over
    }
    return false; // Return false to indicate the game is not over
  },

  handleGameOver() {
    const boardContainer = document.querySelector('.board-container');
    // boardContainer.innerHTML = ''
    const winner = this.game.endGame().type === 'real' ? 'You' : 'Computer';
    boardContainer.textContent = `GAME OVER! ${winner} won!`;
  },

  startGame() {
    this.game = new Game();
    this.game.startGame();
    this.renderBoard(this.game.player.gameboard.board, this.game.player.type);
    this.renderBoard(
      this.game.computer.gameboard.board,
      this.game.computer.type
    );

    this.setupBoardEventListeners();
  },

  resetGame() {
    this.game = null;
    this.init();
  },
};

export default dom;
