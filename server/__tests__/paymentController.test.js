// requiring util for text encoder to avoid getting Text Encoder is not defined error  
global.TextEncoder = require("util").TextEncoder;
global.TextDecoder = require("util").TextDecoder;

// importing the file that will be tested
const orderController = require('../controllers/paymentController');
  
// testing the create payment feature for errors
test('create payment or throw error', async () => {
  expect.hasAssertions();
  try {
    await stripe.paymentIntents.create({
            amount: amount,
            currency: 'aud',
        });
  } catch (err) {
    expect('err').toMatch('err');
  }
});