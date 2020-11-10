import React, { createContext, useReducer } from 'react';
import { reducer, initialState } from '../utils/reducer';

const CardsContext = createContext();

export const CardsProvider = ({ children }) => {
  const [ persons, dispatch ] = useReducer(reducer, initialState);

  return (
    <CardsContext.Provider value={{ persons, dispatch }}>
      {children}
    </CardsContext.Provider>
  )
};

export default CardsContext;
