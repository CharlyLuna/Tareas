// serie infinita de e = 1 + 1/1! + 1/2!...
/* se da como parametro el limite de elementos 
hasta el que llegara la serie; */
function serieE(limit) {
  let sum = 1;
  /* se pone que i sea menor que el limite ya que
  en la suma ya se considera el primer elemento de la serie (1); */
  for (let i = 1; i < limit; i++) {
    sum += 1 / _factorial(i);
  }
  return sum;
}

// funcion complementaria
function _factorial(number) {
  let factorial = 1;
  for (let i = 1; i <= number; i++) {
    factorial *= i;
  }
  return factorial;
}
// resultado de las series infinitas
console.log(serieE(10));
