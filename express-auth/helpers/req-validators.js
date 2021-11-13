const Usuario = require('../models/Usuario');


const emailExist = async(email = '') => {
    let Usuario = await Usuario.findOne({ email });
    if (Usuario) {
        throw new Error(`El email ${ email } ya esta registrado`);
    }
}

module.exports = {
    emailExist
}