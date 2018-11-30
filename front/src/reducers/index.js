import { combineReducers } from 'redux';
import fetchFAQ from './fetchFAQ';

const allReducers = combineReducers({
  fetchFAQ,
});

export default allReducers;
