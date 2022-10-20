// Modal carrito
const btnModalCarrito = document.querySelector("#btn-carrito");
const btnCerrarCarrito = document.querySelector("#cerrar-carrito");
const modal = document.querySelector("#modal");

btnModalCarrito.addEventListener("click", () => {
    modal.showModal()
});

btnCerrarCarrito.addEventListener("click", () => {
    modal.close()
})
