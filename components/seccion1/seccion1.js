import {item} from "../../modulos/item/itemModulo.js"

export function seccion1(){

    let seccion = document.createElement('section');
    seccion.className = "seccion-1";
    
    seccion.appendChild(item("Hola", "https://www.pngfind.com/pngs/m/2-24642_imagenes-random-png-cosas-random-png-transparent-png.png"));
    seccion.appendChild(item("Yey", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg-HIEH0rfFgT3vibX-y8wiPH55fKZ5Mit0g&s"));
    seccion.appendChild(item("Oye", "https://image.pngaaa.com/780/2260780-middle.png"));
    seccion.appendChild(item("Wasa", "https://img-03.stickers.cloud/packs/2112a7d4-5d79-4a5a-9471-38fdef225ed2/webp/646d0c91-2313-4b21-857e-5e34d1683a89.webpk"));

    return seccion;
}