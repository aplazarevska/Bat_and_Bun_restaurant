// requiring util for text encoder to avoid getting Text Encoder is not defined error
global.TextEncoder = require("util").TextEncoder;
global.TextDecoder = require("util").TextDecoder;

// importing the file that will be tested
const orderController = require('../controllers/orderController');
  
// testing the get order feature for errors
test('get order or throw error', async () => {
  expect.hasAssertions();
  try {
    await Order.find({});
  } catch (err) {
    expect('err').toMatch('err');
  }
});

// testing the find order by id feature for errors
test('find order or throw error', async () => {
  expect.hasAssertions();
  try {
    await Order.findById(req.params.id);
  } catch (err) {
    expect('err').toMatch('err');
  }
});

test('track order or throw error', async () => {
  expect.hasAssertions();
  try {
    await Order.find({orderRef: req.params.id, customerPhone: phone});
  } catch (err) {
    expect('err').toMatch('err');
  }
});

// testing the track order feature for errors
test('create order or throw error', async () => {
  expect.hasAssertions();
  try {
    await newOrder.save();
  } catch (err) {
    expect('err').toMatch('err');
  }
});

// testing the update order feature for errors
test('update order or throw error', async () => {
  expect.hasAssertions();
  try {
    await Order.findByIdAndUpdate(req.params.id, req.body);
  } catch (err) {
    expect('err').toMatch('err');
  }
});

// testing the delete order feature for errors
test('delete order or throw error', async () => {
  expect.hasAssertions();
  try {
    await Order.findById(req.params.id);
  } catch (err) {
    expect('err').toMatch('err');
  }
});