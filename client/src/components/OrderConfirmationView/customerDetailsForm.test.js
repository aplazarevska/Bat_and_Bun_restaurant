global.TextEncoder = require("util").TextEncoder;
global.TextDecoder = require("util").TextDecoder;

const orderController = require('./customerDetailsForm');

test('biling details for name and email', () => {
    expect(billingDetails()).toBe('Ana', 'ana@test.com')
});
   
//    const billingDetails = {
//             name: name,
//             email: email,
//         };