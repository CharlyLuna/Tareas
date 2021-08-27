class Dice {
  throw() {
    return Math.floor(Math.random() * 6 + 1);
  }
}

class Runner {
  constructor() {
    this._position = 0;
  }
  getPosition() {
    return this._position;
  }
  run(amount) {
    this._position += amount;
  }
}
