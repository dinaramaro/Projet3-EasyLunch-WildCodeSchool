import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Cookies from 'js-cookie';


const PrivateRoute = ({ component: Component, token, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      Cookies.get('token') !== '' && token !== ''
        ? <Component {...props} />
        : (
          <Redirect to={{
            pathname: '/connexion',
            state: { from: props.location },
          }}
          />
        )
    )}
  />
);

const mstp = state => ({
  token: state.log.token,
});

export default connect(mstp)(PrivateRoute);
