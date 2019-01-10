import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const TakeMoney = (props) => {
  const { total } = props;
  const onToken = (token) => {
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then((response) => {
      response.json().then((data) => {
        alert(`We are in business, ${data.email}`);
      });
    });
  };

  return (
    <div>
      <StripeCheckout
        token={onToken}
        stripeKey="pk_test_ZCwiDmFVZLz1lf8Me8mVthXP"
        amount={total}
        currency="EUR"
      />
    </div>
  );
}

export default TakeMoney;
