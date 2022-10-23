import { eliminarProductoCarrito } from "./mostrarCarrito.js"

const modalCarrito = document.querySelector(".modal-carrito")
const btnModalCarrito = document.getElementById("btn-carrito");
const btnCerrarCarrito = document.getElementById("cerrar-carrito");
const modal = document.querySelector("#modal");


btnModalCarrito.addEventListener("click", () => {
    modal.showModal()
});

btnCerrarCarrito.addEventListener("click", () => {
    modal.close()
})

modal.addEventListener("click", (e) =>{
    e.stopPropagation();

    if(e.target.classList.contains("btn-eliminar-del-carrito"))
        eliminarProductoCarrito(e.target.value)
})

// modal.addEventListener('click', (e) => {
//     e.stopPropagation()
// })
