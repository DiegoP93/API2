import {consumirCanciones}from "./servicioTopCanciones.js"

import {pintarCanciones} from "./pintarCanciones.js"

let canciones=await consumirCanciones()

pintarCanciones(canciones)