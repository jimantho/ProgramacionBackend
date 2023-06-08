class TicketManager{
    #precioBaseGanancia = 0.15
    constructor(){
        this.eventos =[]  // [{}]
                          //  0   1  2  3
    }

    getEventos = () => this.eventos

    agregarEventos = (nombre, lugar, precio, capacidad = 50, fecha = Date())=> {
        // [...this.eventos,evento]  de la manera de react
        /* this.eventos.push(evento)
        console.log(this.eventos) */
        const evento ={
                nombre,
                lugar,
                precio: precio * this.#precioBaseGanancia,
                capacidad,
                fecha
        }
        this.eventos.length === 0 ? evento.id = 1: evento.id = this.eventos[this.eventos.length - 1].id + 1
        this.eventos.push(evento)

        console.log(this.eventos)

    }
    
}

const ticketManager = new TicketManager()
console.log(ticketManager.getEventos())

ticketManager.agregarEventos("anyea","pangoa", 56)
ticketManager.agregarEventos("jimnea","pangoa", 76)

// ticketManager.agregarEventos({nombre:"apal",edad:8})


