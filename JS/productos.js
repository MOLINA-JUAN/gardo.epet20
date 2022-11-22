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
    const {id, nombre, precio, desc, img, cantidad} = prod;
    if (contenedor) {
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
    `;
    }
    });

    const agregarProducto = (id) => {
     const existe = carrito.some(prod => prod.id === id)
  
        if(existe){
            const prod = carrito.map(prod => {
        if(prod.id === id){
          prod.cantidad++
        }
            })
        } else {
            const item = stockProductos.find((prod) => prod.id === id)
            carrito.push(item)
        }
        mostrarCarrito()

    };

    const mostrarcarrito = () => {
     const modalbody = document.querySelector('.modal.modalbody')
        if (modalBody) {
            modalBody.innerHTML = "";
            carrito.forEach((prod) => {
          const { id, nombre, precio, desc, img, cantidad } = prod;
          console.log(modalBody);
          modalBody.innerHTML += `
          <div class="modal-contenedor">
            <div>
            <img class="img-fluid img-carrito" src="${img}"/>
            </div>
            <div>
            <p>Producto: ${nombre}</p>
          <p>Precio: ${precio}</p>
          <p>Cantidad :${cantidad}</p>
          <button class="btn btn-danger"  onclick="eliminarProducto(${id})">Eliminar producto</button>
            </div>
          </div>
          `;
            });
        }
    
    
        if (carrito.length === 0) {
            console.log("Nada");
            modalBody.innerHTML = `
            <p class="text-center text-primary parrafo">¡Aun no agregaste nada!</p>
            `;
        } else {
        console.log("Algo");
      }
        carritoContenedor.textContent = carrito.length;

        if (precioTotal) {
            precioTotal.innerText = carrito.reduce(
          (acc, prod) => acc + prod.cantidad * prod.precio,
          0
          );
        }
    
      guardarStorage();
    }

    function guardarstorage(){
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }

    function eliminarproducto(id){
        const productoId = id;
        carrito = carrito.filter((producto)=> producto.Id !== productoId);
        mostrarcarrito();
    }

    function procesarPedido() {
        carrito.forEach((prod) => {
          const listaCompra = document.querySelector("#lista-compra tbody");
          const { id, nombre, precio, img, cantidad } = prod;
          if (listaCompra) {
            const row = document.createElement("tr");
            row.innerHTML += `
                    <td>
                    <img class="img-fluid img-carrito" src="${img}"/>
                    </td>
                    <td>${nombre}</td>
                  <td>${precio}</td>
                  <td>${cantidad}</td>
                  <td>${precio * cantidad}</td>
                  `;
            listaCompra.appendChild(row);
          }
        });
        totalProceso.innerText = carrito.reduce(
            (acc, prod) => acc + prod.cantidad * prod.precio,
            0
          );
    }

    function enviarCompra(e){
        e.preventDefault()
        const cliente = document.querySelector('#cliente').value
        const email = document.querySelector('#correo').value

        if(email === '' || cliente == ''){
            Swal.fire({
              title: "¡Debes completar tu email y nombre!",
              text: "Rellena el formulario",
              icon: "error",
              confirmButtonText: "Aceptar",
          })
        }else {
  
            const btn = document.getElementById('button');
          
             btn.value = 'Enviando...';
          
             const serviceID = 'default_service';
             const templateID = 'template_qxwi0jn';

            emailjs.sendForm(serviceID, templateID, this)
                .then(() => {
                btn.value = 'Finalizar compra';
                alert('Correo enviado!');
                }, (err) => {
                btn.value = 'Finalizar compra';
                alert(JSON.stringify(err));
            });

            const spinner = document.querySelector('#spinner')
            spinner.classList.add('d-flex')
            spinner.classList.remove('d-none')

            setTimeout(() => {
                spinner.classList.remove('d-flex')
                spinner.classList.add('d-none')
                formulario.reset()
           
                const alertExito = document.createElement('p')
                alertExito.classList.add('alert', 'alerta', 'd-block', 'text-center', 'col-12', 'mt-2', 'alert-success')
                alertExito.textContent = 'Compra realizada correctamente'
                formulario.appendChild(alertExito)
           
                setTimeout(() => {
                  alertExito.remove()
                }, 3000)
                }, 3000)
        }      
        localStorage.clear()  
    }   
