import { getHeroeById } from './bases/example-8'

const promesa = new Promise( (resolve, reject) => {
    setTimeout( () => {
        const heroe = getHeroeById(2);
        console.log(heroe)
    }, 2000)
});

promesa.then( () => {
    console.log('then de la promesa')
})
