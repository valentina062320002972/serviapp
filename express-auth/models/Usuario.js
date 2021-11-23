const { Schema, model } = require('mongoose')

const UsuarioSchema = Schema({
    nombre_usuario: {
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
    cedula_usuario: {
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
    },
    rol: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        require: true,
        default: true
    }
})
UsuarioSchema.methods.toJSON = function() {
    const { __v, _id, ...Usuario } = this.toObject();
    UsuarioSchema._id = _id;
    return Usuario;
}

module.exports = model('Usuario', UsuarioSchema);