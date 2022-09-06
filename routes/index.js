const Router = require('express');
const router = Router();
const { list, add, update, delet } = require('../controlers');

router.get('/usuarios', list);
router.post('/usuarios', add);
router.put('/usuarios/:id', update);
router.delete('/usuarios/:id', delet);

module.exports = router;