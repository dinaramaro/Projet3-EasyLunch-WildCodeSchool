import _ from 'lodash';
import { notifSuccess, notifError, notifInfo } from './notifications';
import { sendCommandParticipate } from './sendCommandParticipate';
import { varServeur } from '../constants';

const stripePaymentLoading = () => ({
  type: 'STRIPE_PAYMENT_LOADING',
});

const stripePaymentFailed = error => ({
  type: 'STRIPE_PAYMENT_FAILED',
  error,
});

export const stripePaymentSuccess = () => ({
  type: 'STRIPE_PAYMENT_SUCCESS',
});

export function stripePaymentParticipate(url, token, sendOrder, codeParticip) {
  const { tableCommand: { price } } = sendOrder;
  return (dispatch) => {
    dispatch(stripePaymentLoading());
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(token),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (res.status === 200) {
          dispatch(notifSuccess(`Votre paiement de ${price} € a bien été effectué !`));
          return res.json();
        } if (res.status === 500) {
          dispatch(notifError('Erreur lors du paiement, veuillez réessayez'));
          return res.json();
        } if (res.status === 403) {
          dispatch(notifInfo('Impossible de commander après 11h30, paiement refusé'));
          return '';
        }
      })
      .then((idStripe) => {
        const newOrder = {
          ...sendOrder,
          idStripe,
        };
        if (idStripe !== '') {
          dispatch(stripePaymentSuccess());
          if (!_.isEmpty(sendOrder)) dispatch(sendCommandParticipate(`${varServeur}participate/${codeParticip}`, newOrder));
        }
      })
      .catch(error => dispatch(stripePaymentFailed(error)));
  };
}
