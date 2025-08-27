export function item(title, image, description, price){

    //  Espacio
    let item = document.createElement('div');
    item.className = "item";

    // Titulo
    let titulo = document.createElement("h3");
    titulo.className = "title";
    item.textContent = title;

    //  Imagen
    let img = document.createElement('img');
    img.src = image;
    img.alt = title;
    img.className = "img";

    // Descripción
    let descripcion = document.createElement('p');
    descripcion.className = "desc";
    descripcion.textContent = description;

    // Precio
    let precio = document.createElement('p');
    precio.textContent = `Precio: $${price}`;
    precio.className="valor";

    item.appendChild(titulo);
    item.appendChild(img);
    item.appendChild(descripcion);
    item.appendChild(precio);

    return item;
}
