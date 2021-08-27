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
    if (amount == 1 || amount == 2) {
      this._position += 1;
    } else if (amount == 3) {
      this._position += 3;
    } else {
      this._position += 2;
    }
    return amount;
  }
}
let runner1 = new Runner();
let runner2 = new Runner();
let dice = new Dice();
// array en el que se vera cada avance del corredor1;
let stepsRunner1 = new Array();
// array en el que se vera cada avance del corredor2;
let stepsRunner2 = new Array();

while (runner1.getPosition() <= 10 || runner2.getPosition() <= 10) {
  /* solo se esta probando que las posibilidades esten funcionando
     de acuerdo a lo obtenido en el dado; */
  console.log(`El dado del corredor1 sacó ${runner1.run(dice.throw())}`);
  console.log(`El dado del corredor2 sacó ${runner2.run(dice.throw())}`);
  // pasamos la posicion final de este turno al array de su respectivo corredor;
  stepsRunner1.push(runner1.getPosition());
  stepsRunner2.push(runner2.getPosition());
}
// mostramos el avance de ambos corredores hasta ahora;
console.log(stepsRunner1);
console.log(stepsRunner2);
