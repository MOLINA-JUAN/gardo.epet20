const stockProductos = [
    {
        Id: 1,
        nombre: "collar y correa",
        cantidad: 1,
        desc: "collar y correa para pasear mascotas",
        precio: 800,
        img: "IMAGENES/collar y correa.webp",
    },
    {
        Id: 2,
        nombre: "cucha para gatos",
        cantidad: 1,
        desc: "cucha para que sus gatos duerman comodos",
        precio: 2500,
        img: "IMAGENES/cucha-gatos.jfif",
    },
    {
        Id: 3,
        nombre: "alimento para hamsters",
        cantidad: 1,
        desc: "para mantener bien sano a su hamster",
        precio: 1500,
        img: "IMAGENES/pienso-h.jpeg",
    },
    {
        Id: 4,
        nombre: "alimento para perro",
        cantidad: 1,
        desc: "para mantener bien cuidado a su perro",
        precio: 2500,
        img: "IMAGENES/alimento-exlente.jpg",
    },
    {
        Id: 5,
        nombre: "rascador para gatos",
        cantidad: 1,
        desc: "para que su mascota se entretenga",
        precio: 4000,
        img: "IMAGENES/rascador-gatos.webp",
    },
    {
        Id: 6,
        nombre: "rueda para hamsters",
        cantidad: 1,
        desc: "para que su hamsters haga ejercicio y se divierta",
        precio: 3200,
        img: "IMAGENES/rueda-h.jfif",
    },
];
let carrito = []

const contenedor = document.querySelector('#contenedor');
const carritoCont = document.querySelector('#carritoCont');
const vaciarCarrito = document.querySelector("#vaciarCarrito");
const precioTotal = document.querySelector("#precioTotal");
const activarFuncion = document.querySelector("#activarFuncion");
const procesarCompra = document.querySelector("#procesarCompra");
const totalProceso = document.querySelector("#totalProceso");
const formulario = document.querySelector('#procesar-pago')

if (activarFuncion) {
    activarFuncion.addEventListener("click", procesarPedido);
}

document.addEventListener('DOMContentLoaded', () =>{
    carrito = JSON.parse(localStorage.getItem('carrito')) || []
    mostrarcarrito()
    document.querySelector("#activarFuncion").click(procesarPedido);
});

if(formulario){
    formulario.addEventListener('submit', enviarCompra)
}

if (vaciarCarrito) {
    vaciarCarrito.addEventListener("click", () => {
      carrito.length = [];
      mostrarCarrito();
    });
}

if (procesarCompra) {
    procesarCompra.addEventListener("click", () => {
      if (carrito.length === 0) {
        Swal.fire({
          title: "¡Tu carrito está vacio!",
          text: "Compra algo para continuar con la compra",
          icon: "error",
          confirmButtonText: "Aceptar",
        });
      } else {
        location.href = "compra.html";
      }
    });
  }

stockProductos.forEach((prod)=> {
    const {id, nombre, precio, desc, img, cantidad} = prod
    contenedor.innerHTML += `
    <div class="card" style="width: 18rem;">
    <img class="car-img-top mt-2" src="${img}" alt="card image cap">
    <div class="card-body">
    <h5 class="card-title">${nombre}</h5>
    <p class="card_text">precio: ${precio} </p>
    <p class="card_text">descripcion: ${desc} </p>
    <p class="card_text">cantidad: ${cantidad} </p>
    <button onclick"agregarproducto(${id})" class="btn btn-primary">Agregar al carrito</button>
    </div>
    `
})

function agregarproducto(id){
    const item = stockProductos.find((prod)=> prod.id === id)
    carrito.push(item)
    mostrarcarrito()
}

 const mostrarcarrito = () => {
    const modalbody = document.querySelector('.modal.modalbody')
    
    modalbody.innerHTML= ''
    carrito.forEach((prod)=> {
        const {id, nombre, img, desc, cantidad, precio} = prod
        modalbody.innerHTML += `
        <div class="modal-contenedor" 
        <div>
        <img class="img-fluid img-carrito" src="${img}"/>
        </div>
        <div>
        <p>Producto: ${nombre} </p>
        <p>Precio: ${precio} </p>
        <p>Cantidad: ${cantidad} </p>
        <button onclick"eliminarproducto(${id})" class="btn btn-danger">Eliminar producto</button>
        </div>
        <div>
        `
    }) 
    carritoCont.textContent = carrito.length
    guardarstorage()
 }

 function eliminarproducto(id){
    const productoId = id
    carrito = carrito.filter((producto)=> producto.Id !== productoId)
    mostrarcarrito()
 }

 function guardarstorage(){
    localStorage.setItem("carrito", JSON.stringify(carrito))
 }