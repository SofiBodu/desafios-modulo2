let productos=["remera", "buzo", "pantalón", "pollera", "zapatillas"]

for (let x=0; x<productos.length; x++){
    console.log (`producto ${x + 1}: ${productos [x]}`)
}

let productoVendido = productos.pop()
console.log (`Se vendió el producto: ${productoVendido}`)

for (let x=0; x<productos.length; x++){
    console.log (`producto ${x + 1}: ${productos [x]}`)
}