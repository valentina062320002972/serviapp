const { response, request } = require('express');
const bcrypt = require('bcryptjs');
//const Servidor = require('../models/Servidor');
const User = require('../models/Servidor');
//const jwt = require('jsonwebtoken');
const ServidorGet = async(req, res) => {
    const { limit = 5, page = 1 } = req.query;
    const query = { status: true };

    const skip = limit * (page - 1);

    const [users, totalUsers] = await Promise.all([
        User.find(query)
        .skip(Number(skip))
        .limit(Number(limit)),
        User.countDocuments(query)
    ]);

    res.json({
        users,
        totalUsers
    });
}

const ServidorPost = async(req, res) => {
    const { password, nombre_Servidor, email, edad, apellido, cedula_Servidor, celular } = req.body;

    const user = new User({ password, nombre_Servidor, email, edad, apellido, cedula_Servidor, celular });

    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(password, salt);

    await user.save()

    res.json({ user });
}

//const ServidorGetBy_id = (req, res) => {
//   res.json({ msg: "get by id Servidor controller" });
//}

const ServidorPut = async(req, res) => {
    const { id } = req.params;
    const { _id, password, ...data } = req.body;

    if (password) {
        const salt = bcrypt.genSaltSync();
        data.password = bcrypt.hashSync(password, salt);
    }

    const user = await User.findByIdAndUpdate(id, data, { new: true });

    res.json(user);
}

const ServidorDelete = async(req, res) => {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    // const user = await User.findByIdAndUpdate(id, { status: false });
    res.json(user);
}

module.exports = {
    ServidorPost,
    ServidorDelete,
    ServidorPut,
    ServidorGet
}