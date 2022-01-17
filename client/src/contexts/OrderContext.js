import { createContext, useReducer } from 'react';
import { orderReducer } from '../reducers/orderReducer';

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, dispatch] = useReducer(orderReducer, []);

  return (
    <OrderContext.Provider value={{orders, dispatch}}>
      {children}
    </OrderContext.Provider>
  );
};
