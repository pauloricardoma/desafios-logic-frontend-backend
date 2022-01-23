const { Router } = require('express');

const ValoresController = require('./controllers/ValoresController');

const router = Router();

router.post('/valores', ValoresController.store);
router.put('/valores/:id', ValoresController.update);
router.get('/valores', ValoresController.index);
router.get('/valores/:id', ValoresController.show);
router.delete('/valores/:id', ValoresController.delete);

module.exports = router;
