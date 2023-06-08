// ES10 Y ES11K
let nombre = '  Fede'
let array = [[], 2, 4, []
]

// console.log(nombre.trim())
// console.log(array.flat())

// importacion dinamica

// import { Calculadora } from "./calculadora";

const modo = 'calculos'
const ejemploImport = async () => {
    if (modo === 'calculos') {
        const { Calculadora } = await import('./calculadora.js')
        let calculadora = new Calculadora()
        console.log(calculadora.suma(5, 7))
    }
}

// ejemploImport();

// ================================================================

let variableDePrueba = 0
let prueba1 = variableDePrueba || 'sin valor'
let prueba2 = variableDePrueba ?? 'sin valor'

// console.log(prueba2)

class Persona {
    #name
    constructor(name, age) {
        this.#name = name,
            this.age = age
    }
    getName() {
        return this.#name

    }
}

const persona = new Persona("Juan", 78)

console.log(persona.getName)