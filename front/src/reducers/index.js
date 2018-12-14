import { combineReducers } from 'redux';
import dataCGV from './dataCGV';
import searchResults from './searchResults';
import menuResto from './menuResto';

const allReducers = combineReducers({
  dataCGV,
  searchResults,
  menuResto,
});

export default allReducers;
