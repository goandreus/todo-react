//objetos literales

const persona = {
    nombre : 'Andres',
    apellido: 'Chavez',
    edad: 45,
    direccion: {
        ciudad: 'Lima',
        zip: 4545,
        lat: 14.565,
        lng: 15151,
    }
};

//console.table(persona);
console.log(persona);

//asignacion de referencia - mutacion no permitible en react
//const persona2 = persona;

//clon del objeto / operador spread
const persona2 = {...persona}
persona2.nombre = 'Carlos';


console.log(persona2);