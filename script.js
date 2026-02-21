console.log ("Hola, este es mi primer proyecto de desarrollo web. Estoy emocionado de compartirlo con ustedes. ¡Gracias por visitarlo!");

let indice = 0
let nombres = ["HOLA, SOY EDWIN", "BIENVENIDO", "DESARROLLADOR WEB"]
let intervalo = null

let boton = document.querySelector("button")
let titulo = document.querySelector("h1")

boton.addEventListener("click", function() {
    if (intervalo) {
        clearInterval(intervalo)
        intervalo = null
        boton.textContent = "Saludarme"
    } else {
        intervalo = setInterval(function() {
            titulo.textContent = nombres[indice]
            titulo.style.color = "black"
            indice = (indice + 1) % nombres.length
        }, 1000)
        boton.textContent = "Detener"
    }
})