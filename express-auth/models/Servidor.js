const { Schema, model } = require('mongoose')

const ServidorSchema = Schema({
    nombre_servidor: {
        type: String,
        required: [true, '**** Db: El nombre es requerido']
    },
    email: {
        type: String,
        required: [true, '**** Db: El email es requerido'],
        unique: true
    },
    edad: {
        type: String,
        required: [true, '**** Db: La edad es requerida'],


    },
    cedula_servidor: {
        type: String,
        required: [true, '**** Db: La cedula es requerida'],
        unique: true
    },
    celular: {
        type: String,
        required: [true, '**** Db: El celular  es requerida'],
        unique: true
    },
    img: {
        type: String
    }
})
UsuarioSchema.methods.toJSON = function() {
    const { __v, _id, ...Usuario } = this.toObject();
    UsuarioSchema._id = _id;
    return Servidor;
}

module.exports = model('Usuario', UsuarioSchema);