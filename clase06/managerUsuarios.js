const fs = require("fs")
const crypto = require('crypto')

const path = './Usuarios.json'

class ManagerUsuarios {
    consultarUsuarios = async () => {
        try {
            if (fs.existsSync(path)) {
                const data = await fs.promises.readFile(path, "utf-8")
                // console.log(data)
                const users = JSON.parse(data)
                return users   
            }
            await fs.promises.writeFile(path, '[]', 'utf-8')
            return []

        } catch (error) {
            console.log(error)

        }
    }
    crearUsuario = async (usuario) => {
        const users = await this.consultarUsuarios();
        if (users.length === 0) {
            usuario.id = 1
        } else {
            usuario.id = users[users.length - 1].id + 1;
        }
        usuario.salt = crypto.randomBytes(128).toString('base64')
        //crypto.randomBytes(128).toString('base64)
        usuario.pwd = crypto.createHmac('sha256', usuario.salt).update(usuario.contrasena).digest('hex')
        users.push(usuario);
        await fs.promises.writeFile(path, JSON.stringify(users, null, '\t'));
        return usuario;

    }
    validarUsuario = async(username, contrasena) =>{
        const usuarios = await  this.consultarUsuarios();
        const usuarioIndex = usuarios.findIndex(u =>u.nombre ===username);
        // console.log(usuarios)
        console.log(usuarioIndex)
        if(usuarioIndex===-1){
            console.log('error, usuario no encontrado');
        return;
        }
        const usuario = usuarios[usuarioIndex];
        const newHash = crypto.createHmac('sha256', usuario.salt).update(contrasena).digest('hex')
        //Ya que no podemos descrifrah la contrasena original del usuario, tenemos que hashear el
        //de contrasena y compararla con la contrasena que tenga guardada el usuario.
        //Nota entonces que, validar una contrasena no es descifrar la contrasena guardada, sino 
        if( newHash === usuario.pwd){
            console.log("Logueado")
        }else{
            console.log('contrasena invalida')
        }
    }
}
module.exports = ManagerUsuarios
