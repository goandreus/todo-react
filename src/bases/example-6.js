// Desestructuracion
// Asignacion Desestrcuturante

const persona = {
    nombre: 'Andres',
    edad: 45,
    clave: 'prueba'
};

const { nombre, edad, clave } = persona;

console.log(nombre, edad, clave);
// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.clave);

const useContext = ({clave,edad,nombre}) =>{
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1451,
            lng: -12.4154,
        }
    }
}

const {nombreClave, anios, latlng:{lat, lng}} = useContext(persona);
console.log(nombreClave, anios);
console.log(lat,lng);

//retornaPersona(persona);