const precio = 400000;
let cuenta = 0;
const precioSpan = document.querySelector(".precio-inicial");
const sumar = document.querySelector(".btn-sumar");
const restar = document.querySelector(".btn-restar");
const cantidad = document.querySelector(".cantidad");
const valorTotal = document.querySelector(".valor-total");

sumar.addEventListener("click", incrementar);
restar.addEventListener("click", disminuir);
precioSpan.innerHTML = precio;

function incrementar(){
    let cantidad = document.querySelector(".cantidad");
    cuenta = Number(cantidad.innerHTML);
    cuenta = cuenta + 1;
    cantidad.innerHTML = cuenta;
    valorTotal.innerHTML = cuenta * precio;
}

function disminuir(){
    let cantidad = document.querySelector(".cantidad");
    cuenta = Number(cantidad.innerHTML);
    cuenta = cuenta - 1;
    cantidad.innerHTML = cuenta;
    valorTotal.innerHTML = cuenta * precio;
}

