import {
  ITEMS_SUCCESS,
  ITEMS_FAIL
} from './constants';

export const itemReducer = (state, action) => {
  switch (action.type) {
    case ITEMS_SUCCESS:
      return [...action.payload];
    case ITEMS_FAIL:
      return [{ error: action.payload }];
    default:
      return state; 
  }
};
