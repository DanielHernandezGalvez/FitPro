// Mostrar productos

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
    })
}

mostrarProductos(productos)
// const boton = document.getElementById(`boton${pesas.id}`);
// boton.addEventListener('click', () => {
//     carritoIndex(producto.id)
//     Swal.fire({
//         title: 'Se agregó al carrito',
//         icon: 'success',
//         timer: 2000,
//         allowOutsideClick: true,
//         confirmButtonColor: '#FF8000',

//     })
// })