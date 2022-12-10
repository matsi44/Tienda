/* ALGORITMO CON UN CONDICIONAL */

/* let edad = prompt("Ingrese su edad");

if (edad >= 18){
    alert("Puede ingresar al sitio.");
}else{
    alert("Usted no puede ingresar al sitio.");
} */

/* ALGORITMO CON CICLO */

/* for (let i=0; i <=13; i++){
    if(i == 7 || i == 8){
        continue
    }
    let ingresarNombre = prompt("Ingrese su Nombre");
    console.log((i + 6) + "hs " + " Turno N " + (i + 1) + " Nombre: " + ingresarNombre);
    alert("Su turno es a las " + (i + 6) + " hs.");
}
 */
/* Simulador Interactivo */

/* function descuento(){
    let cantidad = prompt("¿Cuantos productos desea ordenar?")
    console.log(Number(cantidad));
    if (cantidad < 5){
        alert("No ofrecemos descuentos.");
    }else if (cantidad < 11){
        alert("Usted obtiene un 10% de descuento.");
    }else if (cantidad < 21){
        alert("Usted obtiene un 20% de descuento");
    }else if (cantidad < 31){
        alert("Usted obtiene un 30% de descuento");
    }else{
        alert("Usted obtiene un 40% de descuento.")
    }
}

descuento(); */

/* PREENTREGA 2 */

const productos = [
    {nombre: "Asus", precio: 2000,},
    {nombre: "Evga", precio: 1800,},
    {nombre: "Aorus", precio: 2200,}
];

let carrito = [];

let seleccion = prompt("Bienvenido, desea comprar algun producto?")

while(seleccion != "si" && seleccion !="no"){
    alert("Por favor, ingrese si o no.")
    seleccion = prompt("Bienvenido, desea comprar algun producto? si/no.")
}

if(seleccion == "si"){
    alert("Genial! A continuación vera la lista de productos.");
    let todosLosProductos = productos.map((producto) => producto.nombre + " " + producto.precio + "$");
    alert(todosLosProductos.join(" - "));
} else if (seleccion == "no"){
    alert("Gracias por visitar nuestra página, hasta pronto.")
}

while(seleccion != "no"){
    let producto = prompt("Agrega un producto a tu carrito");
    let precio = 0;

    if (producto == "Asus" || producto == "Evga" || producto == "Aorus"){
        switch(producto) {
            case "Asus":
                precio = 2000;
                break;
            case "Aorus":
                precio = 2200;
                break;
            case "Evga":
                precio = 1800;
                break;
            default:
                break;
        }
        let unidades = parseInt(prompt("Cuantas unidades quiere llevar?"));

        carrito.push({producto, unidades, precio});
        console.log(carrito);

    }else {
        alert("No tenemos ese producto, revise la lista.")
        let todosLosProductos = productos.map((producto) => producto.nombre + " " + producto.precio + "$");
        alert(todosLosProductos.join(" - "));
    }

    seleccion = prompt("Desea seguir comprando?")

    while(seleccion === "no"){
        alert("Gracias por la compra, hasta pronto.")
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar ${carritoFinal.unidades * carritoFinal.precio}`);
        })
    break;
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0);{
    alert(`El total de su compra es: ${total}$`)
    console.log(`El total de su compra es: ${total}$`);
}

