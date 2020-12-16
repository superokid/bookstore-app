import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxThunk from 'redux-thunk';
import * as reducers from './features';

const rootReducer = combineReducers(reducers);

export default function configureStore(initialState = {}) {
  return createStore(rootReducer, initialState, applyMiddleware(ReduxThunk));
}

const store = configureStore();
export { store, rootReducer };
export type ReduxState = ReturnType<typeof rootReducer>;
