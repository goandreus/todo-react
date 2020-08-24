"use strict";

// variables y constantes
var nombre = 'Andres';
var apellido = 'Chavez';
var valorDado = 5;
valorDado = 4;
console.log(nombre, apellido, valorDado); //scope

if (true) {
  var _nombre = 'Carlos';
  console.log(_nombre);
  var _valorDado = 6;
  console.log(_valorDado);
}

console.log(valorDado);