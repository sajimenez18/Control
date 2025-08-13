export function item(titulo,urlImg,descripcion){

    let item = document.createElement('div');
    item.className = "item";
    item.textContent = titulo;

    let img = document.createElement('img');
    img.src = urlImg;
    img.className = "img";
    item.appendChild(img);

    //2 parametros, string, accion
    item.addEventListener('click', ()=>{
        item.classList.add("verde");
        let rHeader = document.querySelector('.header');
        rHeader.classList.add("ocultar");
    });

    return item;
}