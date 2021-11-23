const Rol = require('../models/rol');
const Usuario = require('../models/Usuario');

const emailExist = async(email = '') => {
    let user = await Usuario.findOne({ email });
    if (user) {
        throw new Error(`El email ${ email } ya esta registrado`);
    }
}
const UsuarioByIdExists = async(id = '') => {
    let user = await Usuario.findById(id);
    if (!user) {
        throw new Error(`El id ${ id } no es un usuario`);
    }
}
const rolExist = async(rol = '') => {
    let rolInstance = await Rol.findOne({ rol });
    if (!rolInstance) {
        throw new Error(`El rol ${ rol } no existe`);
    }
}


module.exports = {
    emailExist,
    UsuarioByIdExists,
    rolExist
}