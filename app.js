import { validarProductoRepetido } from "./src/mostrarCarrito.js"
import { productos } from "./src/pesas.js";

const mostrarProductos = (productos) => {
    const contenedorProductos = document.getElementById("producto-contenedor")

    productos.forEach(producto => {
        const div = document.createElement("div")
        div.classList.add("card");
        div.innerHTML += `
        <div class="card" style="width: 18rem;">
            <img src="${producto.img}" class="card-image"  alt="...">
                <div class="card-body">
                <h4  >${producto.title}</h4>
                <p>De: <del>$${producto.before}</del>, a: $${producto.price}</p>
                <button id="boton${producto.id}" class="btn-comprar">Comprar</button>
            </div>
        </div>
         `
        contenedorProductos.appendChild(div)

        const botonCompra = document.getElementById(`boton${producto.id}`)

        botonCompra.addEventListener('click', () => {
            validarProductoRepetido(producto.id)
            Swal.fire({
                title: 'Se agregó al carrito',
                icon: 'success',
                timer: 2000,
                allowOutsideClick: true,
                confirmButtonColor: '#56C0E7',

            })
        })
    })
}

mostrarProductos(productos)

