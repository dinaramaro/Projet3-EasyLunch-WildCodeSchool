import {
  createStore,
  applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import allReducers from '../reducers';

const configureStore = initialState => (
  createStore(
    allReducers,
    initialState,
    applyMiddleware(thunk),
  )
);

export default configureStore;
