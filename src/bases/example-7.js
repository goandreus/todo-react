//desestructuracion de arreglos

const personajes = ['andres', 'carlos', 'diego'];

const [ , p2] = personajes;

console.log(p2);

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [ letras, numeros ] = retornaArreglo();
console.log(letras, numeros);

//tarea
const useSate = (valor) => {
    return [valor, ()=>{console.log('Hola mundo')}];
}

const [nombre, setNombre] = useSate('andres');

console.log(nombre);
setNombre();