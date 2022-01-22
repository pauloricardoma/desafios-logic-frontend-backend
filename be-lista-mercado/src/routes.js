const { Router } = require('express');

const ProdutoController = require('./controllers/ProdutoController');

const router = Router();

router.post('/produto', ProdutoController.store);
router.put('/produto/:id', ProdutoController.update);
router.get('/produto', ProdutoController.index);
router.get('/produto/:id', ProdutoController.show);
router.delete('/produto/:id', ProdutoController.delete);

module.exports = router;
