import { guardarCarritoStorage } from "./storage.js";

const actualizarTotal = (carritDeCompra) => {
    const totalCantidad = carritDeCompra.reduce((acc, item) => acc + item.cantidad, 0)
    const totalCompra = carritDeCompra.reduce((acc, producto) => acc + (producto.price * producto.cantidad), 0)
pintarTotalesCarrito(totalCantidad, totalCompra);
guardarCarritoStorage(carritDeCompra)
};

const pintarTotalesCarrito = (totalCantidad, totalCompra) => {
    const contadorCarrito = document.getElementById('contador-carrito')
    const precioTotal = document.getElementById('precio-total')

    contadorCarrito.innerText = totalCantidad;
    precioTotal.innerText = totalCompra;

}

export { actualizarTotal }