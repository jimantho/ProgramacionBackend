class Persona {
    constructor(nombre, fechaNac, dni) {
        this.nombre = nombre;
        this.fechaNac = fechaNac;
        this.dni = dni;
    }

    saludar = () => {
        console.log(` Saludos ${this.nombre}`  )
    }
    despedirse =()=>{
        console.log(` Despedirse ${this.nombre}` )
    }
} 
const persona1 = new Persona('anyela', "898")

// clase extendida
class Usuarios {
    constructor(nombre, fechaNac,dni, correo){
        super(nombre, fechaNac,dni);
        this.correo = correo
    }
}