import {
  ORDER_SUCCESS,
  ORDER_FAIL
} from './constants.js';

export const orderReducer = (state, action) => {
  switch (action.type) {
    case ORDER_SUCCESS:
      return [...state, {orderRef: action.payload}];
    case ORDER_FAIL:
      return [{ error: action.payload }];
    default:
      return state;
  }
};
