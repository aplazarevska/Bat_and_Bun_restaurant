const Order = require("../models/orderModel");

const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({});
    res.json(orders);
  } catch (err) {
    res.status(404);
    throw new Error(`Error: ${err}`);
  }
};

const getOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    return res.json(order);
  } catch (err) {
    res.status(404).json();
    throw new Error(`Error: ${err}`);
  }
};

const trackOrder = async (req, res) => {
  try {
    const phone = req.query.phone;
    const order = await Order.find({orderRef: req.params.id, customerPhone: phone});

    if (order) {
      res.json(order);
    } else {
      res.status(404);
    }
  } catch (err) {
    res.status(404);
    throw new Error(`Error: ${err}`);
  }
};

const createOrder = async (req, res) => {
  try {
    const {
      orderRef,
      cartItems,
      totalCost,
      customerName,
      customerPhone,
      customerEmail,
      orderStatus,
    } = req.body;

    const newOrder = new Order({
      orderRef,
      cartItems,
      totalCost,
      customerName,
      customerPhone,
      customerEmail,
      orderStatus,
    });

    const savedOrder = await newOrder.save();

    res.status(201).json(savedOrder);
  } catch (err) {
    res.status(422);
    throw new Error(`Error: ${err}`);
  }
};

const updateOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, req.body);
    res.status(204).json(order);
  } catch (err) {
    res.status(422);
    throw new Error(`Error: ${err}`);
  }
};

const deleteOrder = async (req, res) => {
  const order = await Order.findById(req.params.id);
  try {
    if (order) {
      await order.remove();
      res.json({ message: "Order deleted" });
    }
  } catch (err) {
    res.status(404);
    throw new Error(`Error: ${err}`);
  }
};

module.exports = {
  getOrders,
  getOrder,
  trackOrder,
  createOrder,
  updateOrder,
  deleteOrder
};
