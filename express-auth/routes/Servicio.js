const { Router } = require('express');

const router = Router();

const {
    ServicioGet,
    ServicioPost,
    ServicioGetBy_id,
    ServicioPut,
    ServicioDelete
} = require('../controllers/Servicio')

router.get('/', ServicioGet);

router.post('/', ServicioPost);

router.get('/:_id', ServicioGetBy_id);

router.put('/:_id', ServicioPut);

router.delete(':_id', ServicioDelete);

module.exports = router;