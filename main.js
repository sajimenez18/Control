// 
//Importar archivo js header
import {header} from "./components/header/headerComponent.js"
function seccion(){

    //Aca los objetos ya existen
    //Document es un objeto y createElement es un metodo
    let contenedor = document.createElement('contenedor');

    //Se agrega el header al contenedor
    contenedor.appendChild(header());

    let h1 = document.createElement('h1');
    //Solo funciona con etiquetas tipo texto (inner crea)
    h1.innerText = "Hola mundo";
    //Crear clase al texto (Cualquier tipo de elemento creado por el metodo createElement)
    h1.className = "titulo";
    // el '.' llama a metodos de objeto
    contenedor.appendChild(h1);

    //Creacion de parrafo
    let p = document.createElement('p');
    p.innerText = "Introduccion a javascript";
    contenedor.appendChild(p);

    /*Probando error
    let h1 = document.createElement('h1');
    h1.innerText = "Hola";
    contenedor.appendChild(h1);
    Habra error con las variables si se repiten su nombre
    */

    return contenedor;

    /*
    Agrega lo que se ve
    Se agrega en el dom
    document.body.appendChild(contenedor);

    Probando si el proyecto corre por consola
    console.log("Hola mundo");
    */

    seccion.appendChild((seccion1));
    return seccion;
}

//Forma externa de agregarlo al dom
document.body.appendChild(seccion());

// seccion();