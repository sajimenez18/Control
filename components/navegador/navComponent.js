export function obtenerNav(){

let nav = document.createElement("div");
nav.className="nav";


let inicio = document.createElement("div");
let imagen1 = document.createElement("img");
imagen1.src = "https://cdn-icons-png.flaticon.com/512/25/25694.png";
inicio.appendChild(imagen1);


 
let paquetes=document.createElement("div");
let imagen2=document.createElement("img");
imagen2.src="https://png.pngtree.com/png-clipart/20250105/original/pngtree-sealed-cardboard-package-box-for-delivery-png-image_18752522.png";
paquetes.appendChild(imagen2);


let preguntas=document.createElement("div");
let imagen3=document.createElement("img");
imagen3.src="https://icones.pro/wp-content/uploads/2021/05/icone-question-grise.png";
preguntas.appendChild(imagen3);

let carrito=document.createElement("div");
let imagen4=document.createElement("img");
imagen4.src="https://cdn-icons-png.freepik.com/512/107/107831.png";
carrito.appendChild(imagen4);


  nav.appendChild(inicio);
  nav.appendChild(paquetes);
  nav.appendChild(preguntas);
  nav.appendChild(carrito);
  

return nav;

}