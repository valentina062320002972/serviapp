const { Router } = require('express');
const { check } = require('express-validator');

const { emailExist } = require('../helpers/req-validators');
const { validateDate } = require('../middlewares')

const router = Router();

const {
    UsuarioPost,
} = require('../controllers/Usuario')

// router.get('/', ServicioGet);

router.post('/', [
    check('name', 'El nombre es requerido').not().isEmpty(),
    check('password', 'La contraseña debe tener minimo 6 dighitos').isLength({ min: 6 }),
    check('email', 'El correo no es valido').isEmail(),
    check('email').custom(emailExist),
    validateDate
], UsuarioPost);

// router.get('/:sku', ServicioGetBySKU);

// router.put('/:sku', ServicioPut);

// router.delete(':sku', ServicioDelete);

module.exports = router;