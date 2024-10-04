let nombreProducto = "Brownies"; 
let precioUnitario = 500; 
let cantidadDeseada = prompt(`¿Cuántos ${nombreProducto} (precio por unidad= $${precioUnitario}) desea comprar?`);;

let costoTotal = precioUnitario * cantidadDeseada;

if(cantidadDeseada>=5){
    let descuento=(costoTotal*10)/100
    costoTotal=costoTotal - descuento
    alert(`Por comprar ${cantidadDeseada} unidades se le ha aplicado un descuento del 10% a su compra!`)
}

alert(`El costo total de su compra de ${cantidadDeseada} ${nombreProducto} es de: $${costoTotal}`);