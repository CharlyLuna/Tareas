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

// serie infinita de S = 4 -(4/3)+(4/5)-(4/7)...
function serieS(limit) {
  let sum = 4;
  /* se agrega este contador del total de elementos
  para comparar con el limite que establecimos;*/
  let elements = 2; // inicia en 2 ya que en el primer ciclo ya se estan tomando dos elementos;
  let i, j;
  for (i = 3, j = -4; elements <= limit; i += 2, j *= -1, elements++) {
    sum += j / i;
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
console.log(serieE(100));
console.log(serieS(100));
