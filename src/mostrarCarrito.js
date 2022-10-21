import { productos } from "./pesas.js";
import { actualizarTotal } from "./actualizarCarrito.js";

const carritDeCompra = [];
const validarProductoRepetido = (productoId) => {
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
    }
  
    // const eliminarDelCarrito = (productoId) => {
    //     const item = carritDeCompra.find((producto) => producto.id == productoId)
    //     const indice = carritDeCompra.indexOf(item)
    //     carritDeCompra.splice(indice, 1)
            
    //     Toastify({
    //         text: "Se eliminó del carrito",
    //         gravity: "bottom",
    //         style: {
    //           background:  '#FF8000',
    //           color: '#ffffff'
    //         }
    //       }).showToast();
    //       mostrarCarrito(productoId)	
    // }
    // Te quedaste en el minuto 49

export { validarProductoRepetido, mostrarCarrito }
