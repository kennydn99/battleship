import Game from './game';
import Ship from './ship';

const dom = {
  game: null,

  isHorizontal: true,

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
    const winner = this.game.endGame().type === 'real' ? 'You' : 'Computer';

    // Create modal overlay
    const overlay = document.createElement('div');
    overlay.classList.add('modal-overlay');

    // Create modal content
    const modal = document.createElement('div');
    modal.classList.add('modal');

    const winnerText = document.createElement('p');
    winnerText.textContent = `GAME OVER! ${winner} won!`;

    const playAgainButton = document.createElement('button');
    playAgainButton.textContent = 'Play Again';
    playAgainButton.addEventListener('click', () => {
      document.body.removeChild(overlay); // Remove modal
      this.resetGame(); // Reset game logic
    });

    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.addEventListener('click', () => {
      document.body.removeChild(overlay); // Close modal
    });

    // Append elements to modal
    modal.appendChild(winnerText);
    modal.appendChild(playAgainButton);
    modal.appendChild(closeButton);

    // Append modal to overlay
    overlay.appendChild(modal);

    // Append overlay to the body
    document.body.appendChild(overlay);
  },

  startGame() {
    this.game = new Game();
    this.game.startGame();
    this.renderSetupGame();
    // this.renderBoard(this.game.player.gameboard.board, this.game.player.type);
    // this.renderBoard(
    //   this.game.computer.gameboard.board,
    //   this.game.computer.type
    // );

    // this.setupBoardEventListeners();
  },

  resetGame() {
    this.game = null;
    this.init();
  },

  renderSetupGame() {
    const boardContainer = document.querySelector('.board-container');

    // render blank player gameboard
    this.renderBoard(this.game.player.gameboard.board, this.game.player.type);

    // Wrapper for ship selection
    const shipContainer = document.createElement('div');
    shipContainer.classList.add('ship-container');

    // Create and render ship selection
    const shipSelection = document.createElement('div');
    shipSelection.classList.add('ship-select');

    // Create ships
    const shipSizes = [5, 4, 3, 3, 2];

    shipSizes.forEach((size, index) => {
      const shipElement = document.createElement('div');
      shipElement.classList.add('ship');
      shipElement.dataset.size = size;
      shipElement.draggable = true;
      shipElement.id = `ship-${size}-${index}`;

      // Create each segment of the ship to look like board cells
      for (let i = 0; i < size; i++) {
        const shipSegment = document.createElement('div');
        shipSegment.classList.add('ship-cell');
        shipElement.appendChild(shipSegment);
      }

      // Add drag event listeners
      shipElement.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', size);

        // Store the dragged element reference
        e.dataTransfer.setData('shipElementId', e.target.id);
      });

      shipSelection.appendChild(shipElement);
    });
    shipContainer.appendChild(shipSelection);

    const rotateButton = document.createElement('button');
    rotateButton.textContent = 'Rotate';
    rotateButton.addEventListener('click', () => {
      this.rotateShips(); // Rotate ships logic
    });
    shipContainer.appendChild(rotateButton);

    boardContainer.appendChild(shipContainer);
    // Enable dropping on player board
    this.setupPlayerBoardForShipPlacement();
  },

  setupPlayerBoardForShipPlacement() {
    const playerBoardCells = document.querySelectorAll(
      '.real-board .board-cell'
    );

    playerBoardCells.forEach((cell) => {
      cell.addEventListener('dragover', (e) => {
        e.preventDefault(); // Allow drop
      });

      cell.addEventListener('drop', (e) => {
        e.preventDefault();
        const shipSize = e.dataTransfer.getData('text/plain');
        const row = parseInt(e.target.dataset.row, 10);
        const col = parseInt(e.target.dataset.col, 10);

        try {
          // Place the ship at the dropped coordinates
          const shipPlaced = this.game.player.gameboard.placeShip(
            new Ship(parseInt(shipSize, 10)),
            row,
            col,
            this.isHorizontal // Determine if the ship is vertical
          );

          if (shipPlaced) {
            // Remove selected ship from ship selection
            const shipElementId = e.dataTransfer.getData('shipElementId');
            const shipNode = document.getElementById(shipElementId);
            if (shipNode) {
              shipNode.remove(); // Remove the ship from the selection
            }
            // Re-render board with ship placed
            this.renderBoard(
              this.game.player.gameboard.board,
              this.game.player.type
            );

            this.setupPlayerBoardForShipPlacement();

            const remainingShips =
              document.querySelectorAll('.ship-select .ship');
            if (remainingShips.length === 0) {
              console.log('All ships placed! Ready to start the game.');
              // Optionally, you can disable further placements or start the game
            }
          }
        } catch (error) {
          console.error(error.message);
        }
      });
    });
  },

  rotateShips() {
    this.isHorizontal = !this.isHorizontal; // Toggle vertical or horizontal placement

    // Rotate ships in the ship selection
    const shipSelection = document.querySelector('.ship-select');
    const ships = document.querySelectorAll('.ship');

    if (!this.isHorizontal) {
      shipSelection.style.flexDirection = 'row';
      ships.forEach((ship) => {
        const shipElement = ship; // Create a new reference
        shipElement.style.flexDirection = 'column';
      });
    } else {
      shipSelection.style.flexDirection = 'column';
      ships.forEach((ship) => {
        const shipElement = ship; // Create a new reference
        shipElement.style.flexDirection = 'row';
      });
    }
  },
};

export default dom;
