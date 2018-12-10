import { combineReducers } from 'redux';
import dataCGV from './dataCGV';
import searchResults from './searchResults';
import menuRestoInfos from './menuRestoInfos';
import menuResto from './menuResto';

const allReducers = combineReducers({
  dataCGV,
  searchResults,
  menuRestoInfos,
  menuResto,
});

export default allReducers;
