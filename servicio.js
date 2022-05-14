//Pasos para consumir un API

//1.Para donde voy(Conocer la URI del servicio o API a consumir)
const URI="https://api.spotify.com/v1/artists/4tm8CEdm4pkQsEh4jIr9Yp/top-tracks?market=US"

//2.Armo la peticion(Que se va hacer)
const TOKEN="Bearer BQDzudd4LRjKOLBkp14Wh43z2MD6uIkXnbsGF8NsCP1ptFw9E8JHgDfYy9N0TnEWmpJ48bBI1RMjE6Jcgo8ne6XZ0GKoJgoIpSy1zLNafJ8RtAkAdT5qQLNwvVJy3VWCCFVunVwt48OljVPDAcK4mOiDfZF5OPg"

const PETICION={
    method:"GET",
    headers:{Authorization:TOKEN}
}
//3. Arranca para el servidor (Consumir API)
fetch(URI,PETICION)
.then(function(respuesta){
    return(respuesta.json()) //se verfica que la repuesta este en formato json
})
.then(function(respuesta){
    pintarCanciones(respuesta)// hago lo que quiera con la respueta
}) 
.catch(function(respuesta){
    console.log(respuesta)//semuetra el fallo
})

//Funcion para pintar la informacion que llega de API
function pintarCanciones(canciones){
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