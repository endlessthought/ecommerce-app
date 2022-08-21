const { Router } = require('express');
const orderController = require('../controllers/order.controller');
const router = Router();

router.get('/order/:id', orderController.getOrders);
router.post('/order/:id', orderController.checkout);

module.exports = router;