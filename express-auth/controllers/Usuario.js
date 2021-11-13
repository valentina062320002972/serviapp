const bcrypt = require('bcryptjs');

const User = require('../models/Usuario');

const UsuarioGet = (req, res) => {
    res.json({ msg: "get Usuario controller" });
}

const UsuarioPost = async(req, res) => {
    const { nombre_usuario, email, edad } = req.body;

    const Usuario = new Usuario({ nombre_usuario, email, edad });

    const salt = bcrypt.genSaltSync();
    Usuario.nombre_usuario = bcrypt.hashSync(nombre_usuario, salt);

    await Usuario.save()

    res.json({ Usuario });
}

const UsuarioGetBy_id = (req, res) => {
    res.json({ msg: "get by id Usuario controller" });
}

const UsuarioPut = (req, res) => {
    res.json({ msg: "put Products controller" });
}

const UsuarioDelete = (req, res) => {
    res.json({ msg: "delete Products controller" });
}

module.exports = {
    UsuarioPost
}