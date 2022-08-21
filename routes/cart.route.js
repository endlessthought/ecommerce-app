const { Router } = require('express');
const cartController = require('../controllers/cart.controller');
const router = Router();

router.get('/cart/:id', cartController.getCartItems);
router.post('/cart/:id', cartController.addCartItem);

router.delete('/cart/:userId/:itemId', cartController.deleteItem);

module.exports = router;