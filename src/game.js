import Player from './player';
import Ship from './ship';
import dom from './dom';

export default class Game {
  constructor() {
    this.player = null;
    this.computer = null;
    this.currentTurn = null;
  }

  startGame() {
    this.player = new Player('real');
    this.computer = new Player('computer');
    this.currentTurn = this.player;
    // Render initial gameboards in DOM
    dom.init();
  }

  setupBoards() {
    // place ships temporary
    const playerShip = new Ship(3);
    this.player.gameboard.placeShip(playerShip, 0, 0, true);
    const computerShip = new Ship(3);
    this.computer.gameboard.placeShip(computerShip, 9, 0, true);

    // then render
    dom.renderBoard(this.player.gameboard.board, this.player.type);
    dom.renderBoard(this.computer.gameboard.board, this.computer.type);
  }

  playTurn(x, y) {
    if (this.currentTurn === this.player) {
      this.handlePlayerAttack(x, y);
    } else if (this.currentTurn === this.computer) this.handleComputerAttack();
  }

  handlePlayerAttack(x, y) {
    this.player.attack(this.computer, x, y);
    // Update DOM to reflect changes
    if (this.isGameOver()) {
      this.endGame();
    } else {
      this.switchTurn();
    }
  }

  handleComputerAttack() {
    this.computer.randomAttack(this.player);
    // Update DOM to reflect changes
    if (this.isGameOver()) {
      this.endGame();
    } else {
      this.switchTurn();
    }
  }

  isGameOver() {
    return (
      this.player.gameboard.allShipsSunk() ||
      this.computer.gameboard.allShipsSunk()
    );
  }

  switchTurn() {
    this.currentTurn =
      this.currentTurn === this.player ? this.computer : this.player;
  }

  endGame() {
    if (this.player.gameboard.allShipsSunk()) return this.computer;
    return this.player;
  }
}
