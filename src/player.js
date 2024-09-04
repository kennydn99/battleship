import Gameboard from './gameboard';

export default class Player {
  constructor(type) {
    this.type = type;
    this.gameboard = new Gameboard();
    this.availablePositions = this.initializeAvailablePositions();
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

  initializeAvailablePositions() {
    const positions = [];
    for (let x = 0; x < this.gameboard.board.length; x++) {
      for (let y = 0; y < this.gameboard.board[0].length; y++) {
        positions.push([x, y]);
      }
    }
    return positions;
  }

  randomAttack(opponent) {
    const randomIndex = Math.floor(
      Math.random() * this.availablePositions.length
    );
    const [x, y] = this.availablePositions[randomIndex];

    console.log(`Computer randomly attacking x:${x}, y:${y}`);
    this.attack(opponent, x, y);

    this.availablePositions.splice(randomIndex, 1);
  }
}
