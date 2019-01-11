import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Cookies from 'js-cookie';


const PrivateRouteAdmin = ({
  component: Component, token, user, ...rest
}) => (
  <Route
    {...rest}
    render={props => (
      Cookies.get('token') !== '' && token !== '' && user === 'easylunch@easylunch.com'
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
  user: state.log.user.mail,
});

export default connect(mstp)(PrivateRouteAdmin);
