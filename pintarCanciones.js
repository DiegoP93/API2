//Funcion para pintar la informacion que llega de API
export function pintarCanciones(canciones){
    console.log(canciones)//Objeto
    console.log(canciones.tracks)//Arreglo
    let fila=document.getElementById("fila")

    //Recorro el arreglo de canciones
    canciones.tracks.forEach(function(cancion){
        //console.log(cancion.name)
        //console.log(cancion.preview_url)
        //console.log(cancion.album.images[0].url)
        //console.log(cancion.album)
        //console.log(cancion.popularity)

        //crear una columna para cada cancion
        let columna=document.createElement("div")
        columna.classList.add("col")

        //creo la tarjeta 
        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card","h-100")

        //creo la foto 
        let foto=document.createElement("img")
        foto.src=cancion.album.images[0].url
        foto.classList.add("card-img-top")

        //creo el audio
        let audio=document.createElement("audio")
        audio.src=cancion.preview_url
        audio.classList.add("W-100")
        audio.setAttribute("controls","controls")

        //creo el nombre 
        let nombre=document.createElement("h5")
        nombre.textContent=cancion.name
        nombre.classList.add("card-title","text-center")

        //Padres e hijos
        tarjeta.appendChild(nombre)
        tarjeta.appendChild(foto)
        tarjeta.appendChild(audio)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)

    })
}