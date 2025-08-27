function header(){

    let header = document.createElement('header');
    header.className = "header";

    //titulo
    let izq = document.createElement('h3');
    izq.className = "titulo";
    izq.innerText = "Tienda de Tefy ^^";

    //div
    let icon = document.createElement('div');
    icon.className = "icon";
    icon.innerText = "🫶​";

    header.appendChild(izq);
    header.appendChild(icon);
    return header
}

export {header}