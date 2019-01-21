import { combineReducers } from 'redux';
import searchResults from './searchResults';
import menuResto from './menuResto';
import formOrder from './formOrder';
import cardResto from './cardResto';
import chooseByUser from './chooseByUser';
import sendOrder from './sendOrder';
import getCode from './getCode';
import notificationsReducer from './notificationsReducer';
import log from './log';
import codeParticip from './codeParticip';
import toggleTab from './toggleTab';
import stripeLoading from './stripeLoading';

const allReducers = combineReducers({
  searchResults,
  menuResto,
  notificationsReducer,
  formOrder,
  cardResto,
  chooseByUser,
  sendOrder,
  log,
  getCode,
  codeParticip,
  toggleTab,
  stripeLoading,
});

export default allReducers;
