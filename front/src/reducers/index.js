import { combineReducers } from 'redux';
import searchResults from './searchResults';

const allReducers = combineReducers({
  searchResults,
});

export default allReducers;
