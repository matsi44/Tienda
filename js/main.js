
// /* PREENTREGA 2 */

// const productos = [
//     {nombre: "Asus", precio: 2000,},
//     {nombre: "Evga", precio: 1800,},
//     {nombre: "Aorus", precio: 2200,}
// ];

// let carrito = [];

// let seleccion = prompt("Bienvenido, desea comprar algun producto?")

// while(seleccion != "si" && seleccion !="no"){
//     alert("Por favor, ingrese si o no.")
//     seleccion = prompt("Bienvenido, desea comprar algun producto? si/no.")
// }

// if(seleccion == "si"){
//     alert("Genial! A continuación vera la lista de productos.");
//     let todosLosProductos = productos.map((producto) => producto.nombre + " " + producto.precio + "$");
//     alert(todosLosProductos.join(" - "));
// } else if (seleccion == "no"){
//     alert("Gracias por visitar nuestra página, hasta pronto.")
// }

// while(seleccion != "no"){
//     let producto = prompt("Agrega un producto a tu carrito");
//     let precio = 0;

//     if (producto == "Asus" || producto == "Evga" || producto == "Aorus"){
//         switch(producto) {
//             case "Asus":
//                 precio = 2000;
//                 break;
//             case "Aorus":
//                 precio = 2200;
//                 break;
//             case "Evga":
//                 precio = 1800;
//                 break;
//             default:
//                 break;
//         }
//         let unidades = parseInt(prompt("Cuantas unidades quiere llevar?"));

//         carrito.push({producto, unidades, precio});
//         console.log(carrito);

//     }else {
//         alert("No tenemos ese producto, revise la lista.")
//         let todosLosProductos = productos.map((producto) => producto.nombre + " " + producto.precio + "$");
//         alert(todosLosProductos.join(" - "));
//     }

//     seleccion = prompt("Desea seguir comprando?")

//     while(seleccion === "no"){
//         alert("Gracias por la compra, hasta pronto.")
//         carrito.forEach((carritoFinal) => {
//             console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar ${carritoFinal.unidades * carritoFinal.precio}`);
//         })
//     break;
//     }
// }

// const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0);{
//     alert(`El total de su compra es: ${total}$`)
//     console.log(`El total de su compra es: ${total}$`);
// }

const btnCart = document.querySelector('.container-icon');
const containerCartProducts = document.querySelector('.container-cart-products');
btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart');
})