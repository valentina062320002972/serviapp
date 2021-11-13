const { Router } = require('express');
const { check } = require('express-validator');

const {
    ServidorByIdExists
} = require('../helpers/req-validators');
const { validateDate } = require('../middlewares')

const router = Router();

const {
    ServidorPost,
    ServidorPut,
    ServidorDelete,
    ServidorGet
} = require('../controllers/Servidor');
const { ServidorGetBy_id } = require('../controllers/Servidor');

router.get('/', ServidorGet);
router.delete('/:id', [
    // validateJWT,
    //isAdmin,
    check('id', 'No es un Id valido').isMongoId(),
    check('id').custom(ServidorByIdExists),
    validateDate
], ServidorDelete);
router.post('/', [
    check('nombre_Servidor', 'El nombre es requerido').not().isEmpty(),
    check('cedula_Servidor', 'La cedula debe tener minimo 6 dighitos').isLength({ min: 6 }),
    check('email', 'El correo no es valido').isEmail(),
    //check('email').custom(emailExist),
    check('edad', 'Edad es requerido').not().isEmpty(),
    check('celular', 'celular es requerido').not().isEmpty(),
    validateDate
], ServidorPost);

router.put('/:id', [
    check('id', 'No es valido').isMongoId(),
    check('id').custom(ServidorByIdExists),
    validateDate
], ServidorPut);

//router.get('/:_id', ServidorGetBy_id);

router.put('/:_id', ServidorPut);

module.exports = router;