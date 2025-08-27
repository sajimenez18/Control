import { item } from "../../modulos/item/itemModulo.js"
import { productos } from "../../database/productos.js";

export function seccion1(){

    let seccion = document.createElement('section');
    seccion.className = "section1";

    for (let i = 0; i < 4 && i < productos.length; i++) {
        seccion.appendChild(item(productos[i].title, productos[i].image, productos[i].description, productos[i].price));
    }
    
    return seccion;
}