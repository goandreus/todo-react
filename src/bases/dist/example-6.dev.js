"use strict";

// Desestructuracion
// Asignacion Desestrcuturante
var persona = {
  nombre: 'Andres',
  edad: 45,
  clave: 'prueba'
};
var nombre = persona.nombre,
    edad = persona.edad,
    clave = persona.clave;
console.log(nombre, edad, clave); // console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.clave);

var useContext = function useContext(_ref) {
  var clave = _ref.clave,
      edad = _ref.edad,
      nombre = _ref.nombre;
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 14.1451,
      lng: -12.4154
    }
  };
};

var _useContext = useContext(persona),
    nombreClave = _useContext.nombreClave,
    anios = _useContext.anios,
    _useContext$latlng = _useContext.latlng,
    lat = _useContext$latlng.lat,
    lng = _useContext$latlng.lng;

console.log(nombreClave, anios);
console.log(lat, lng); //retornaPersona(persona);