//template string

const nombre = 'andres';
const apellidos = 'Chavez';


//concatenar
const nombreCompleto = nombre + ' ' + apellidos;

//template string
const nombreCompleto1 = `${nombre} ${apellidos}
${1 + 1}
`;

console.log(nombreCompleto + nombreCompleto1);

function getSaludo(nombre) {
    return 'Hola mundo: ' + nombre ;
}
console.log(`este es un texto: ${getSaludo(nombre)}`);