import Gameboard from './gameboard';

export default class Player {
  constructor(type) {
    this.type = type;
    this.gameboard = new Gameboard();
  }

  getType() {
    return this.type;
  }

  attack(opponent, x, y) {
    if (this.type === 'real') {
      opponent.gameboard.receiveAttack(x, y);
    } else if (this.type === 'computer') {
      // Make computer smarter later
      opponent.gameboard.receiveAttack(x, y);
    }
  }

  randomAttack(opponent) {
    const x = Math.floor(Math.random() * this.gameboard.board.length);
    const y = Math.floor(Math.random() * this.gameboard.board[0].length);
    this.attack(opponent, x, y);
  }
}
