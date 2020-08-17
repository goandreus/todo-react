"use strict";

//arreglos
//const arreglo = new Array(100);
var arreglo = [1, 2, 3, 4]; //no usar para insertar mala practica
// arreglo.push(1)
// arreglo.push(2)
// arreglo.push(3)

var arreglo2 = [].concat(arreglo, [5]);
var arreglo3 = arreglo2.map(function (numero) {
  return numero * 2;
});
console.log(arreglo3);
console.log(arreglo2);
console.log(arreglo);