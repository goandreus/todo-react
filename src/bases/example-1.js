// variables y constantes

const nombre = 'Andres';
const apellido = 'Chavez';

let valorDado = 5;
valorDado = 4;

console.log(nombre,apellido,valorDado);

//scope
if(true){
    const nombre = 'Carlos';
    console.log(nombre)
    let valorDado = 6
    console.log(valorDado)
}

console.log(valorDado);