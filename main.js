function muestra_oculta(id) {
    let div = document.getElementById(id);
    // Verifica si el elemento está visible o no usando la propiedad "display"
    if (div.style.display === "none" || div.style.display === "") { 
        // Si está oculto, cambia su estilo para mostrarlo
        div.style.display = "flex";
    } else {
        // Si está visible, cambia su estilo para ocultarlo
        div.style.display = "none";
    }
}
