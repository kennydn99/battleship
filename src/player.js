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
    if (this.type === 'real') opponent.gameboard.receiveAttack(x, y);
  }
}
