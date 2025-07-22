// 
function seccion(){

    //aca los objetos ya existen
    //document es un objeto y createElement es un metodo
    let contenedor = document.createElement('contenedor');

    let h1 = document.createElement('h1');
    //Solo funciona con etiquetas tipo texto (inner crea)
    h1.innerText = "Hola mundo";
    //Crear clase al texto (Cualquier tipo de elemento creado por el metodo createElement)
    h1.className = "titulo";
    // el . llama a metodos de objeto
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
    Se agrega en el doom
    document.body.appendChild(contenedor);

    console.log("Hola mundo");
    */
}

//Forma externa de agregarlo al Doom
document.body.appendChild(seccion());

// seccion();