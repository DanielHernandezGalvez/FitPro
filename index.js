import { mostrarProductos } from "./app.js";
import { actualizarTotal } from "./src/actualizarCarrito.js";
import { pintarCarrito } from "./src/mostrarCarrito.js";
import { productos } from "./src/pesas.js";
import { obtenerCarritoStorage } from "./src/storage.js";

document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos(productos);

    if(localStorage.getItem('carritDeCompra')) {
        const carrito = obtenerCarritoStorage();
        pintarCarrito(carrito)
        actualizarTotal(carrito)
    };
});