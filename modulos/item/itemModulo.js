export function item(){

    let item = document.createElement('div');
    item.className = "item";

    let titulo = document.createElement('h1');
    titulo.innerText = "Snoopy";

    let img = document.createElement('img');
    img.src = 'assets/snoopy.png';
    img.className = "snoopy";

    let descripcion = document.createElement('p');
    descripcion.innerText = "Encontraste a Snoopy fan de la música; buenos gustos músicales";
    descripcion.className = "descrip";
    
    item.appendChild(titulo);
    item.appendChild(img);
    item.appendChild(descripcion);
    return item;
}