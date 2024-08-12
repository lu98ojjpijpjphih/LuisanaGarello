// Crear arreglo
let jugadores = ["Guadalupe", "Maximo", "Valentina", "Maylen", "Teresita"]
// Arreglo vacío
let puntajes = []

// Ingresar puntajes
for (let i = 0; i < jugadores.length; i++) {
    let puntaje = Number(prompt("Ingresa el puntaje del jugador " + jugadores[i]))
    puntajes.push(puntaje)
}

// Buscar el puntaje más alto
let maxPuntaje = puntajes[0]
let indexMax = 0

for (let indice = 1; indice < puntajes.length; indice++) {
    if (puntajes[indice] > maxPuntaje) {
        maxPuntaje = puntajes[indice]
        indexMax = indice
    }
}

console.log("El puntaje más alto es " + maxPuntaje + ", correspondiente a " + jugadores[indexMax] + ".")

// Buscar el puntaje más bajo
let minPuntaje = puntajes[0]
let indexMin = 0

for (let i = 1; i < puntajes.length; i++) {
    if (puntajes[i] < minPuntaje) {
        minPuntaje = puntajes[i]
        indexMin = i
    }
}

console.log("El puntaje más bajo es " + minPuntaje + ", correspondiente a " + jugadores[indexMin] + ".")

// Agregar un jugador y su puntaje
let nuevoJugador = prompt("Ingresa el nombre del nuevo jugador:")
let nuevoPuntaje = Number(prompt("Ingresa el puntaje para " + nuevoJugador + ":"))
jugadores.push(nuevoJugador)
puntajes.push(nuevoPuntaje)

// Mostrar la cantidad de puntajes guardados
console.log("La cantidad de puntajes guardados es: " + puntajes.length + ".")

// Modificar los puntajes de los últimos dos jugadores
let ultimoJugador = puntajes.length - 1
let penultimoJugador = puntajes.length - 2

puntajes[penultimoJugador] = Number(prompt("Ingresa el nuevo puntaje para " + jugadores[penultimoJugador] + ":"))
puntajes[ultimoJugador] = Number(prompt("Ingresa el nuevo puntaje para " + jugadores[ultimoJugador] + ":"))


