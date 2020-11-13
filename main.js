//crear tarjetas con items

class Producto  {
    constructor (imagen, nombreProducto, precio, id) {
        this.imagen = imagen;
        this.nombreProducto = nombreProducto;
        this.precio = precio;
        this.id = id;
    }
}

let tarjetasProductos = [];

let producto1 = new Producto ("https://images.unsplash.com/photo-1551515300-2d3b7bb80920?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80",
"Mouse Red", "$10", 1);

let producto2 = new Producto ("https://images.unsplash.com/photo-1541140532154-b024d705b90a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", 
"Keyboar White", "$20", 2);

let producto3 = new Producto ("https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
"Monitor White", "$50", 3);

tarjetasProductos.push(producto1, producto2, producto3);


// Agregar los productos a la lista
const contenedorPrincipal = document.getElementById('products');

let agregarProductos = () => {
    for(i = 0; i < tarjetasProductos.length; i++){
        let contenedor = document.createElement('div');
        let texto = document.createElement('h3');
        texto.textContent = tarjetasProductos[i].nombreProducto;
        contenedor.appendChild(texto);

        let imagen = document.createElement('img');
        imagen.src = tarjetasProductos[i].imagen;
        imagen.style.width = "200px";
        contenedor.appendChild(imagen);

        let precio = document.createElement('h4');
        precio.textContent = tarjetasProductos[i].precio;
        contenedor.appendChild(precio);

        let boton = document.createElement('button');
        boton.style.border = '1px solid red';
        boton.textContent = 'Comprar';
        contenedor.appendChild(boton);
        //agregar aca mismo el evento click

        contenedorPrincipal.appendChild(contenedor);
        
    }
}

agregarProductos();

//Guardar los productos seleccionados en el carrito

let productosSeleccionados = [];
localStorage.setItem('savedItems', JSON.stringify(productosSeleccionados));


//Click en el botón comprar
let btn = document.getElementById('btn');

btn.addEventListener('click', agregar);


//Solicitar información personal al usuario




