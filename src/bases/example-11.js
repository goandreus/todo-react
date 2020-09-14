const  getImage = async () => {
    try{
        const apiKey = 'sgFZPyNoX9D3WPLvOWSY52uJsdju4xjq'

        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        
        const { data } = await resp.json();

        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    }catch (err){
        //manejo de errores
        console.err(err);
    }
} 

getImage();


// peticion
//     .then(resp => resp.json())
//     .then(({data}) => {
//         const { url } = data.images.original;

//         const img = document.createElement('img');
//         img.src = url;
//         document.body.append(img);
//         console.log(data.images.original.url)
//     })
//     .catch(console.warn);