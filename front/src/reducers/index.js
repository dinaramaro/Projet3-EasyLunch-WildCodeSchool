import { combineReducers } from 'redux';
import searchResults from './searchResults';
import menuResto from './menuResto';
import formOrder from './formOrder';
import cardResto from './cardResto';
import chooseByUser from './chooseByUser';
import sendOrder from './sendOrder';

import log from './log';

const allReducers = combineReducers({
  searchResults,
  menuResto,
  formOrder,
  cardResto,
  chooseByUser,
  sendOrder,
  log,
});

export default allReducers;
