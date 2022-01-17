const mongoose = require('mongoose');

const orderSchema = mongoose.Schema(
  {
    orderRef: { type: String, required: true },
    cartItems: [
      {
        name: { type: String, required: true },
        qty: { type: String, required: true },
        price: { type: String, required: true },
        item: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'Item'
        }
      }
    ],
    totalCost: { type: Number, default: 0.0, required: true },
    customerName: { type: String, required: true },
    customerPhone: { type: String, required: true },
    customerEmail: { type: String, required: true },
    orderStatus: { type: String, default: "Processing", required: true }
  },
  {
    timestamps: true
  }
);

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
