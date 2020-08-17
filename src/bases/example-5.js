//Funciones


//No recomendable
// function saludar(nombre){
//     return  `hola, ${nombre}`;
// }

const saludar = function( nombre ){
    return `Hola, ${nombre}`;
}

const saludar2 = ( nombre ) => {
    return `Hola, ${nombre}`;
}

const saludar3 = ( nombre ) => `Hola, ${nombre}`;
const saludar4 = () => `Hola mundo`;


console.log(saludar4());
console.log(saludar('Andrees'));
console.log(saludar2('Carlos '));
console.log(saludar3('Andres2'));

const getUser = () => (
    {
        uid: 'ABC123',
        username: 'poooooo'
    }
);

const user = getUser();
console.log(user);

//Tarea
// function getUsuarioActivo(nombre){
//     return {
//         uid: 'ABC567',
//         username: nombre
//     }
// };

const getUsuarioActivo = (nombre) =>({
    uid: 'ABC123',
    username: nombre
});

const usuarioActivo = getUsuarioActivo('Andres');
console.log(usuarioActivo);