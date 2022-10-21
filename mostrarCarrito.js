const carritDeCompra = [];

const mostrarCarrito = (productoId) => {
    const contenedorCarrito = document.getElementById('modal')

    const renderCarrito = () => {
        let producto = productos.find( producto => producto.id == productoId)
        carritDeCompra.push(producto)
       
        producto.cantidad = 1;

        let div = document.createElement("div")
        div.classList.add("productoEnCarrito")
        div.innerHTML = `
            <br>
            <p>${producto.title}</p>  
            <img src="${producto.img}" width="20%" />
            <p>Precio: ${producto.price}</p> 
            <p id="cantidad${producto.id}">Cantidad: ${producto.cantidad}</p>      
            <button id="eliminar${producto.id}" class="btn-eliminar-del-carrito">Eliminar</button> 
            <hr>
            `
        contenedorCarrito.appendChild(div)
    }
    renderCarrito()
}

    