import { URI_GENERAR_TOKEN } from "./constantes.js"
import { PETICION_GENERAR_TOKEN } from "./constantes.js"

export async function generarToken(){
    let respuesta=await fetch(URI_GENERAR_TOKEN,PETICION_GENERAR_TOKEN)
    return respuesta.json()
}