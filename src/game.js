import Player from './player';
import Ship from './ship';

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
    //  initial gameboards in DOM
    // this.setupBoards();
  }

  setupBoards() {
    // place ships temporary
    const playerShip = new Ship(3);
    this.player.gameboard.placeShip(playerShip, 0, 0, true);
    const computerShip = new Ship(3);
    this.computer.gameboard.placeShip(computerShip, 9, 0, true);
  }

  playTurn(x, y) {
    if (this.currentTurn === this.player) {
      this.handlePlayerAttack(x, y);
    } else if (this.currentTurn === this.computer) this.handleComputerAttack();
  }

  handlePlayerAttack(x, y) {
    this.player.attack(this.computer, x, y);
    if (this.isGameOver()) {
      this.endGame();
    } else {
      this.switchTurn();
    }
  }

  handleComputerAttack() {
    this.computer.randomAttack(this.player);
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
