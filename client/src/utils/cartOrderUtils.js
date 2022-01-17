import axios from "axios";

const ccyFormat = (num) => {
  return `${num.toFixed(2)}`;
};

const subtotal = (cartItems) => {
  return cartItems
    .map(({ qty, price }) => qty * price)
    .reduce((sum, i) => sum + i, 0);
};

const placeOrder = async (order) => {
  try {
    await axios.post("/orders", order, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    return `Error placing the order. Error: ${err}.`;
  }
};

export { ccyFormat, subtotal, placeOrder };
