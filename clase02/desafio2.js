class Contador {
    constructor(responsable) {
        this.responsable = responsable;
        this.contador = 0
    }

    static contadorGlobal = 0

    getResponsable = () => this.responsable

    Contar() {
        this.contador++;
        Contador.contadorGlobal++
    }

    getContador(){
        return this.contador
    }
}

const contador = new Contador("Anyela")

console.log(contador.getResponsable())