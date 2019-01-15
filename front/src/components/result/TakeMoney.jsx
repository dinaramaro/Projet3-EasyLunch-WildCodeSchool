import React from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { varServeur } from '../../constants';

const TakeMoney = (props) => {
  const { chooseByUser: { total } } = props;
  const totalSend = total * 100 / 100;

  const onToken = (token) => {
    fetch(`${varServeur}`, {
      method: 'POST',
      body: JSON.stringify(token),
    }).then((response) => {
      response.json();
    });
  };

  return (
    <div>
      <StripeCheckout
        token={onToken}
        stripeKey="pk_test_ZCwiDmFVZLz1lf8Me8mVthXP"
        amount={Math.round(totalSend * 100)}
        currency="EUR"
      />
    </div>
  );
};

function mstp(state) {
  return {
    chooseByUser: state.chooseByUser,
  };
}

export default connect(mstp)(TakeMoney);
