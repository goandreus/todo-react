const promesa = new Promise( (resolve, reject) => {
    setTimeout( () => {
        console.log('2 seconds later')
    }, 2000)
});

