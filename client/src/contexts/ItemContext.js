import React, { createContext, useReducer } from 'react';
import { itemReducer } from '../reducers/itemReducer';

export const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  const [allItems, dispatch] = useReducer(itemReducer, []);

  return (
    <ItemContext.Provider value={{allItems, dispatch}}>
      {children}
    </ItemContext.Provider>
  );
};
