//arreglos

//const arreglo = new Array(100);

const arreglo = [1,2,3,4];

//no usar para insertar mala practica
// arreglo.push(1)
// arreglo.push(2)
// arreglo.push(3)

let arreglo2 = [...arreglo, 5];

const arreglo3 = arreglo2.map( function(numero) {
    return numero * 2;
});



console.log(arreglo3);
console.log(arreglo2); 
console.log(arreglo);