"use strict";

//Funciones
//No recomendable
// function saludar(nombre){
//     return  `hola, ${nombre}`;
// }
var saludar = function saludar(nombre) {
  return "Hola, ".concat(nombre);
};

var saludar2 = function saludar2(nombre) {
  return "Hola, ".concat(nombre);
};

var saludar3 = function saludar3(nombre) {
  return "Hola, ".concat(nombre);
};

var saludar4 = function saludar4() {
  return "Hola mundo";
};

console.log(saludar4());
console.log(saludar('Andrees'));
console.log(saludar2('Carlos '));
console.log(saludar3('Andres2'));

var getUser = function getUser() {
  return {
    uid: 'ABC123',
    username: 'poooooo'
  };
};

var user = getUser();
console.log(user); //Tarea
// function getUsuarioActivo(nombre){
//     return {
//         uid: 'ABC567',
//         username: nombre
//     }
// };

var getUsuarioActivo = function getUsuarioActivo(nombre) {
  return {
    uid: 'ABC123',
    username: nombre
  };
};

var usuarioActivo = getUsuarioActivo('Andres');
console.log(usuarioActivo);