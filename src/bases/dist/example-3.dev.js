"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//objetos literales
var persona = {
  nombre: 'Andres',
  apellido: 'Chavez',
  edad: 45,
  direccion: {
    ciudad: 'Lima',
    zip: 4545,
    lat: 14.565,
    lng: 15151
  }
}; //console.table(persona);

console.log(persona); //asignacion de referencia - mutacion no permitible en react
//const persona2 = persona;
//clon del objeto / operador spread

var persona2 = _objectSpread({}, persona);

persona2.nombre = 'Carlos';
console.log(persona2);