console.log("Hola soy el index publico")
const socket = io()
socket.emit('mensaje','Hola este es un mensjae del cliente!')
//escuchando al server
socket.on('mensajeServer',data=>{console.log(data)})
socket.on('evento_para_todos_menos_actual',data=>{console.log(data)})
socket.on('evento_para_todos',data=>{console.log(data)})

// input.addEventListener('keyUp',evt =>{
//     if(evt.keyCode ==="Enter"){
//         socket.emit("mensaje2",input.value)
//         input.value=''
//     }
// })