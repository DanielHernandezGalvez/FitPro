import { productos } from "./pesas.js";
import { actualizarTotal } from "./actualizarCarrito.js";
import { obtenerCarritoStorage } from "./storage.js";

let carritDeCompra = [];
const validarProductoRepetido = (productoId) => {

    if(localStorage.getItem('carritDeCompra')){ 
        carritDeCompra = obtenerCarritoStorage()
    }
    const productoRepetido = carritDeCompra.find(producto => producto.id === productoId);

    if (productoRepetido) {
        productoRepetido.cantidad++;
        const cantidadProducto = document.getElementById(`cantidad${productoRepetido.id}`)
        cantidadProducto.innerText = `cantidad: ${productoRepetido.id}`
        actualizarTotal(carritDeCompra)
    } else {
        mostrarCarrito(productoId)
    }
};



const mostrarCarrito = (productoId) => {
    const contenedorCarrito = document.getElementById('modal')

    const producto = productos.find(producto => producto.id === productoId)
    carritDeCompra.push(producto)
        let div = document.createElement("div")
        div.classList.add("productoEnCarrito")
        div.innerHTML = `
            <br>
            <p>${producto.title}</p>  
            <img src="${producto.img}" width="20%" />
            <p>Precio: ${producto.price}</p> 
            <p id="cantidad${producto.id}">Cantidad: ${producto.cantidad}</p>      
            <button onClick = "eliminarDelCarrito(${producto.id})"  class="btn-eliminar-del-carrito">Eliminar</button> 
            <hr>
            `
        contenedorCarrito.appendChild(div)
        actualizarTotal(carritDeCompra)
    };
  
    const pintarCarrito = (carrito) => {
        const contenedorCarrito = document.getElementById('modal');


        carrito.forEach(producto => {
        const div = document.createElement("div")
        div.classList.add("productoEnCarrito")
        div.innerHTML = `
            <br>
            <p>${producto.title}</p>  
            <img src="${producto.img}" width="20%" />
            <p>Precio: ${producto.price}</p> 
            <p id="cantidad${producto.id}">Cantidad: ${producto.cantidad}</p>      
            <button id="eliminar${producto.id}"  class="btn-eliminar-del-carrito">Eliminar</button> 
            <hr>
            `
        contenedorCarrito.appendChild(div)
    });
};

const eliminarProductoCarrito = (productoId) => {
    const carritoStorage = obtenerCarritoStorage();
    const carritoActualizado = carritoStorage.filter(producto => producto.id != productoId);

  
    actualizarTotal(carritoActualizado)
    pintarCarrito(carritoActualizado)
}
  

export { validarProductoRepetido, mostrarCarrito, pintarCarrito, eliminarProductoCarrito }
