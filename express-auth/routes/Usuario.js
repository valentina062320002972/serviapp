const { Router } = require('express');
const { check } = require('express-validator');

const {
    UsuarioByIdExists
} = require('../helpers/req-validators');
const { validateDate } = require('../middlewares')

const router = Router();

const {
    UsuarioPost,
    UsuarioPut,
    UsuarioDelete,
    UsuarioGet
} = require('../controllers/Usuario');
const { UsuarioGetBy_id } = require('../controllers/Usuario');

router.get('/', UsuarioGet);
router.delete('/:id', [
    // validateJWT,
    //isAdmin,
    check('id', 'No es un Id valido').isMongoId(),
    check('id').custom(UsuarioByIdExists),
    validateDate
], UsuarioDelete);
router.post('/', [
    check('nombre_usuario', 'El nombre es requerido').not().isEmpty(),
    check('cedula_usuario', 'La cedula debe tener minimo 6 dighitos').isLength({ min: 6 }),
    check('email', 'El correo no es valido').isEmail(),
    //check('email').custom(emailExist),
    check('edad', 'Edad es requerido').not().isEmpty(),
    check('celular', 'celular es requerido').not().isEmpty(),
    validateDate
], UsuarioPost);

router.put('/:id', [
    check('id', 'No es valido').isMongoId(),
    check('id').custom(UsuarioByIdExists),
    validateDate
], UsuarioPut);

//router.get('/:_id', UsuarioGetBy_id);

router.put('/:_id', UsuarioPut);

module.exports = router;