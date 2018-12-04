import { combineReducers } from 'redux';
import dataCGV from './dataCGV';
import searchResults from './searchResults';

const allReducers = combineReducers({
  dataCGV,
  searchResults,
});

export default allReducers;
