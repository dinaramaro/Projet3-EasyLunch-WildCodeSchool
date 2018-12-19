import { combineReducers } from 'redux';
import searchResults from './searchResults';
import menuResto from './menuResto';

const allReducers = combineReducers({
  searchResults,
  menuResto,
});

export default allReducers;
