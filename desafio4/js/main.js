function totalDeLaCompra (precioUnitario,cantidadDeseada) {
    let total = precioUnitario * cantidadDeseada;
    return total;
}

let nombreProducto = "Brownies"; 
let precioUnitario = 500; 
let cantidadDeseada = prompt(`¿Cuántos ${nombreProducto} (precio por unidad= $${precioUnitario}) desea comprar?`);

let precioTotal = totalDeLaCompra (precioUnitario,cantidadDeseada);
console.log(`El total de su compra de ${cantidadDeseada}x ${nombreProducto} es de: $${precioTotal}`)

alert(`El total de su compra de ${cantidadDeseada}x ${nombreProducto} es de: $${precioTotal}`)