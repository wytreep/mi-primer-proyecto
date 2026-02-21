console.log ("Hola, este es mi primer proyecto de desarrollo web. Estoy emocionado de compartirlo con ustedes. ¡Gracias por visitarlo!");

// Seleccionar un elemento

function saludar() {
    let titulo = document.querySelector("h1")

// Cambiar su contenido
titulo.textContent = "HOLA, SOY EDWIN A. CARABALI"

// Cambiar su estilo
titulo.style.color = "black"
}
// Escuchar un clic
let boton = document.querySelector("button")
boton.addEventListener("click", function() {
    saludar()
})