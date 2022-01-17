const express = require('express');
const router = express.Router();
const { createPaymentIntent } = require('../controllers/paymentController');

router.route('/payment_intents').post(createPaymentIntent);

module.exports = router;
