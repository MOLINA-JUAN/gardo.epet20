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

const contenedor = document.querySelector('#contenedor')
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
}
