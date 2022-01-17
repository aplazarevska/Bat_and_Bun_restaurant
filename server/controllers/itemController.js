const Item = require("../models/itemModel");

const getItems = async (req, res) => {
  try {
    const items = await Item.find({ deleted: false });
    res.json(items);
  } catch (err) {
    res.status(404);
    throw new Error(`Error: ${err}`);
  }
};

const getItem = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    res.json(item);
  } catch (err) {
    res.status(404);
    throw new Error(`Error: ${err}`);
  }
};

const createItem = async (req, res) => {
  try {
    const item = await Item.create(req.body);
    res.status(201).json(item);
  } catch (err) {
    res.status(422);
    throw new Error(`Error: ${err}`);
  }
};

const updateItem = async (req, res) => {
  try {
    const item = await Item.findByIdAndUpdate(req.params.id, req.body);
    const updatedItem = await item.save();
    res.status(204);
  } catch (err) {
    res.status(422);
    throw new Error(`Error: ${err}`);
  }
};

const deleteItem = async (req, res) => {
  const item = await Item.findById(req.params.id);
  try {
    if (item) {
      await item.remove();
      res.json({ message: 'Item deleted' });
    }
  } catch (err) {
    res.status(404);
    throw new Error(`Error: ${err}`);
  }
};

module.exports = {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem
};
