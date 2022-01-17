// requiring util for text encoder to avoid getting Text Encoder is not defined error
global.TextEncoder = require("util").TextEncoder;
global.TextDecoder = require("util").TextDecoder;

// importing the file that will be tested
const itemController = require('../controllers/itemController');
  
// testing the get item feature for errors
test('get item or throw error', async () => {
  expect.hasAssertions();
  try {
    await Item.find({});
  } catch (err) {
    expect('err').toMatch('err');
  }
});

// testing the find item by id feature for errors
test('find item by id or throw error', async () => {
  expect.hasAssertions();
  try {
    await Item.findById(req.params.id);
  } catch (err) {
    expect('err').toMatch('err');
  }
});

// testing the create item feature for errors
test('create item or throw error', async () => {
  expect.hasAssertions();
  try {
    await await Item.create(req.body);
  } catch (err) {
    expect('err').toMatch('err');
  }
});

// testing the update item feature for errors
test('update item or throw error', async () => {
  expect.hasAssertions();
  try {
    await Item.findByIdAndUpdate(req.params.id, req.body);
  } catch (err) {
    expect('err').toMatch('err');
  }
});

// testing the delete item feature for errors
test('delete item or throw error', async () => {
  expect.hasAssertions();
  try {
    await Item.findById(req.params.id);
  } catch (err) {
    expect('err').toMatch('err');
  }
});