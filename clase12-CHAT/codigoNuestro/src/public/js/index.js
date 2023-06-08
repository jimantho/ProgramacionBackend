const socket = io()

let user
let chatbox = document.getElementById('chatbox')

//ventana emergent mediante libreria de js sweetalert isntaldo por cdn
Swal.fire({
    tittle: "Identificate",
    input: 'text',
    text: "Ingresar un usuario para identificar",
    // icon: 'success',
    inputValidator: value => {
        return !value && 'Necesitas escribir un nombre de usuario para continuar'
    },
    allowOutsideClick: false

}).then(resultado => {
    user = resultado.value
    console.log("recibio de arriba",user)
    socket.emit('authenticated', user)

})

// metodos
const handleSocket = evt => {
    if (evt.key == 'Enter') {
        if (chatbox.value.trim().length > 0) {
            socket.emit('message',
                {
                    user: user,
                    mesasage: chatbox.value
                })
            chatbox.value = ''
        }
    }
}

chatbox.addEventListener('keyup', handleSocket)

socket.on('messageLog', data => {
    let log = document.getElementById('messageLog')
    let messages = ''
    data.forEach(mensajes => {
        messages = messages + `<li>${mensajes.user} dice: ${mensajes.mesasage}</li>`
    });
    log.innerHTML = messages
})

socket.on('newUserConnected', data => {
    console.log(data)
    if (!user) return
    Swal.fire({
        toast: true,
        position: 'top-end',
        showConfirmBotton: false,
        timer: 10000,
        title: `${data} se ha unido al chat`,
        icon: 'success'
    })

})