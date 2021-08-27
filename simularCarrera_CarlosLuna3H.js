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
    /* probabilidades de avanzar segun el numero del dado:
      1 o 2 = avanza 1, 3 = avanza 3, 4 5 y 6 = avanza 2;
    */
    if (amount == 1 || amount == 2) {
      this._position += 1;
    } else if (amount == 3) {
      this._position += 3;
    } else {
      this._position += 2;
    }
  }
}
let runner1 = new Runner();
let runner2 = new Runner();
let dice = new Dice();
// array en el que se vera cada avance del corredor1;
let stepsRunner1 = new Array();
// array en el que se vera cada avance del corredor2;
let stepsRunner2 = new Array();
// agregamos la variable ganador para saber si ya hubó un ganador;
let winner = false;

// mientras ninguno llegue a 100 y no haya un ganador sigue el ciclo;
while (
  (runner1.getPosition() < 100 || runner2.getPosition() < 100) &&
  winner === false
) {
  //hacemos las tiradas de cada corredor
  runner1.run(dice.throw());
  runner2.run(dice.throw());
  // se establece la condicion de que si uno llega a la cifra establecida es el ganador;
  if (runner1.getPosition() >= 100 && runner2.getPosition() < 100) {
    console.log("Ganó el corredor 1");
    // cambiamos el valor de winner a true si ya hay ganador;
    winner = true;
  } else if (runner1.getPosition() >= 100 && runner2.getPosition() >= 100) {
    console.log("Es un empate");
    winner = true;
  } else if (runner1.getPosition() < 100 && runner2.getPosition() >= 100) {
    console.log("Ganó el corredor 2");
    winner = true;
  }
  // pasamos la posicion final de este turno al array de su respectivo corredor;
  stepsRunner1.push(runner1.getPosition());
  stepsRunner2.push(runner2.getPosition());
}
// mostramos el avance de ambos corredores hasta ahora;
console.log(stepsRunner1);
console.log(stepsRunner2);
