const express = require ('express');
const router = express.Router();
const {
  getOrders,
  getOrder,
  trackOrder,
  createOrder,
  updateOrder,
  deleteOrder,
} = require('../controllers/orderController');

const { protect } = require('../middleware/authMiddleware');

router.route('/').get(protect, getOrders).post(createOrder);
router.route('/:id').get(trackOrder).get(protect, getOrder).put(protect, updateOrder).delete(protect, deleteOrder);

module.exports = router;
