const contenedor = document.getElementById('producto-contenedor');

productos.forEach(producto => {
    const div = document.createElement('div');
    div.classList.add('card');

    div.innerHTML += `
    <div class="card-image">
        <img src="${producto.img}">
        <span class="card-title">${producto.nombre}</span>
    </div>
    <div class="card-content">
        <p>${producto.precio}</p>
    `;
    contenedor.appendChild(div);
});

function bienvenida(){
    alert('bienvenido(a) a la Grande')
};
bienvenida();

const mostrarListaOrdenada = () => {
    const array = [];
    productos.forEach(producto => array.push(producto.nombre + ' $' + producto.precio))
    alert('Lista de precios: ' + '\n' + array.join('\n'));
};

mostrarListaOrdenada();