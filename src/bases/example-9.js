import { getHeroeById } from './bases/example-8'

//Mark --
// const promesa = new Promise( (resolve, reject) => {
//     setTimeout( () => {
//         const p1 = getHeroeById(2);
//         resolve(p1);
//     }, 2000)
// });

// promesa.then( (heroe) => {
//     console.log('heroe', heroe)
// }).catch( err => console.warn( err ) );

//Mark -- 

const getHeroeByIdAsync = (id) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            const p1 = getHeroeById(id);
            if(p1){
                resolve(p1);
            }else{
                reject('No se encontro data');
            }
        }, 2000)
    });
}

getHeroeByIdAsync(2)
    .then(console.log)
    .catch( console.war )
    