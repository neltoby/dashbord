import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import { reducer } from '../../reducer';

import ErrorBoundary from '../errorBoundary';

const Store = createContext();

export const useGlobalStore = () => useContext(Store);

const initialState = {
  open: false,
};

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>
      <ErrorBoundary ui={<h1>Something went wrong</h1>}>
        {children}
      </ErrorBoundary>
    </Store.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.element,
};

export default Provider;
