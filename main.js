import { header } from "./components/header/headerComponent.js"
import { seccion1 } from "./components/seccion1/seccion1.js"
import { obtenerNav } from "./components/navegador/navComponent.js";

function seccion(){

    let seccion = document.createElement('section');

    seccion.appendChild(header());
    seccion.appendChild(seccion1());
    seccion.appendChild(obtenerNav())

    console.log("todo bien?")
    return seccion;
}

document.body.appendChild(seccion());