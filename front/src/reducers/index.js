import { combineReducers } from 'redux';
import searchResults from './searchResults';
import menuResto from './menuResto';
import log from './log';

const allReducers = combineReducers({
  searchResults,
  menuResto,
  log,
});

export default allReducers;
