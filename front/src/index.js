/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import ScrollToTop from './ScrollToTop';
import { createStore, applyMiddleware } from 'redux';
import allReducers from './reducers';
import thunk from 'redux-thunk';
import 'font-awesome/css/font-awesome.min.css';
import 'react-quill/dist/quill.snow.css';
import 'react-notifications/lib/notifications.css';
import CheckToken from './CheckToken';

const store = createStore(allReducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <CheckToken>
      <BrowserRouter>
        <ScrollToTop>
          <App />
        </ScrollToTop>
      </BrowserRouter>
    </CheckToken>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
