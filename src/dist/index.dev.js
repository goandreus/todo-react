"use strict";

//template string
var nombre = 'andres';
var apellidos = 'Chavez'; //concatenar

var nombreCompleto = nombre + ' ' + apellidos; //template string

var nombreCompleto1 = "".concat(nombre, " ").concat(apellidos, "\n").concat(1 + 1, "\n");
console.log(nombreCompleto + nombreCompleto1);

function getSaludo(nombre) {
  return 'Hola mundo: ' + nombre;
}

console.log("este es un texto: ".concat(getSaludo(nombre)));