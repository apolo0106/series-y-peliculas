document.addEventListener("keyup" , e=>{

    if(e.target.matches("#buscador")){
    
    document.querySelectorAll(".articulo").forEach(pelicula =>{
    
    
    pelicula.textContent.toLowerCase().includes(e.target.value.toLowerCase())
    ?pelicula.classList.remove("filtro")
    :pelicula.classList.add("filtro")
    
    })
    
    }
    
    
    
    })