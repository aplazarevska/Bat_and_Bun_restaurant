import {
  CART_ADD,
  CART_REMOVE,
  CART_REMOVE_ALL
} from './constants.js';

export const cartReducer = (state, action) => {
  switch (action.type) {
    case CART_ADD:
      const additionalItem = action.payload;
      const alreadyInCart = state.find(itemInCart => itemInCart.item === additionalItem.item);
      
      if (alreadyInCart) {
        return state.map(itemInCart => itemInCart.item === additionalItem.item ? ({...additionalItem, qty: additionalItem.qty + itemInCart.qty}) : itemInCart);
      } else {
        return [
          ...state,
          {
            item: action.payload.item,
            name: action.payload.name,
            qty: action.payload.qty,
            price: action.payload.price
          }
        ];
      }
    case CART_REMOVE:
      return state.filter(item => item.item !== action.payload.item);
    case CART_REMOVE_ALL:
      return action.payload;
    default:
      return state;
  }
};
