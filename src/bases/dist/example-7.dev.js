"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

//desestructuracion de arreglos
var personajes = ['andres', 'carlos', 'diego'];
var p2 = personajes[1];
console.log(p2);

var retornaArreglo = function retornaArreglo() {
  return ['ABC', 123];
};

var _retornaArreglo = retornaArreglo(),
    _retornaArreglo2 = _slicedToArray(_retornaArreglo, 2),
    letras = _retornaArreglo2[0],
    numeros = _retornaArreglo2[1];

console.log(letras, numeros); //tarea

var useSate = function useSate(valor) {
  return [valor, function () {
    console.log('Hola mundo');
  }];
};

var _useSate = useSate('andres'),
    _useSate2 = _slicedToArray(_useSate, 2),
    nombre = _useSate2[0],
    setNombre = _useSate2[1];

console.log(nombre);
setNombre();