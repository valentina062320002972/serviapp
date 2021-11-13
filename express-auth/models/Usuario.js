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
        required: [true, '**** Db: La edad es requerida']
    },
    img: {
        type: String
    }
})
UsuarioSchema.methods.toJSON = function() {
    const { __v, _id, ...Usuario } = this.toObject();
    UsuarioSchema._id = _id;
    return Usuario;
}

module.exports = model('Usuario', UsuarioSchema);