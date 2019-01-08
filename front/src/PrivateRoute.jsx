import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, token, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      token !== ''
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
