
import {generarToken}from "./servicioGenerarToken.js"



//1.Para donde voy(Conocer la URI del servicio o API a consumir)
export const URI_TOP_CANCIONES="https://api.spotify.com/v1/artists/4tm8CEdm4pkQsEh4jIr9Yp/top-tracks?market=US"

//1.1 URI del servicio que genera tokens 
export const URI_GENERAR_TOKEN="https://accounts.spotify.com/api/token"

//NOTA:DATOS DE ENVIO (POST)
const DATO1="client_id=f706fbc6a8824819b4f4887c4d7902f6"
const DATO2="client_secret=5d6ab33a590a4ecd9cd42c28b5e20949"
const DATO3="grant_type=client_credentials"

const DATOS_PETICION=`${DATO1}&${DATO2}&${DATO3}`

export const PETICION_GENERAR_TOKEN={
    method:"POST",
    headers:{"Content-type":"application/x-www-form-urlencoded"},
    body:DATOS_PETICION
}

//2.Armo la peticion(Que se va hacer)
let token= await generarToken()
export const TOKEN=token.token_type+" "+token.access_token;

export const PETICION_TOP_CANCIONES={
    method:"GET",
    headers:{Authorization:TOKEN}
}