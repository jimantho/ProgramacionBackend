/* const persona =
{
    nombre: "anyela",
    edad: 15
} */

// no reasignaable ≠ no inmutable
/* persona.nombre = "angelica"
console.log(persona.nombre)
 */
// funcion de TIPO ANONIMA
/* const saludar1 = function () {
    console.log("Hola Como estas")
}
 */
/* saludar()
 */
// funcion de TIPO FLECHA pero aun anonima
/* const saludar2 = (param) => {
console.log("hola como estas")
} */

// DE MANERA IMPLICITA
// const saludar3 =() => "hola saludando"

// para ejecutarlo ya no seria solo saludar3() sino:
// console.log(saludar3())


/* CONSIGNA: 
Definiremos la funcion "mostrar lista", la cual recibira un arreglo con elementos como parametro

* Si la lista esta vacia, devolver mensaje indicando lista vacia
* Si la lista cuenta con elementos , mostrarlos 1 por 1 en consola. Finalizar el proceso indicando la  

invocar la funcion con los casos de prueba */

const mostrarLista = (array = []) => {
    if (array.length === 0) {
        return "Lista Vacia"

    } else {
        array.forEach(element => {
            console.log(element)
        });
        return "ok "
    }
}
console.log(mostrarLista([1, 2, 33, 5, 6]))