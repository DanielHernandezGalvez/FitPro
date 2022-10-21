// Modal carrito
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

// modal.addEventListener("click", () =>{
//     btnCerrarCarrito.click()
// })

// modal.addEventListener('click', (e) => {
//     e.stopPropagation()
// })
