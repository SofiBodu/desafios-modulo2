const productos = ["remera1", "remera2", "buzo", "campera"]

for(let nombrarProductos of productos){
    let crearH2 = document.createElement("h2")
    crearH2.innerHTML = nombrarProductos;
    document.body.appendChild(crearH2)
    crearH2.className = "text-slate-200 text-[1.5rem] ml-[2rem]" 
}
