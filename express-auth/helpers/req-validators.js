const User = require('../models/Usuario');


const emailExist = async(email = '') => {
    let user = await usuarios.findOne({ email });
    if (Usuario) {
        throw new Error(`El email ${ email } ya esta registrado`);
    }
}
const UsuarioByIdExists = async(id = '') => {
    let user = await User.findById(id);
    if (!user) {
        throw new Error(`El id ${ id } no es un usuario`);
    }
}
module.exports = {
    emailExist,
    UsuarioByIdExists
}