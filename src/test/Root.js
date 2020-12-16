import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureMockStore([thunk]);

const Root = ({ children, initialState = {} }) => {
  return <Provider store={mockStore(initialState)}>{children}</Provider>;
};

export default Root;
