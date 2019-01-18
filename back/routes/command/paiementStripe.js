import express from 'express';
import Stripe from 'stripe';
import { privateKeyStripe, isProd } from '../myAccount/secretOrKey';

const router = express.Router();
const stripe = Stripe(privateKeyStripe);

router.post('/:amount', (req, res) => {
  const heure = () => {
    const currentDate = new Date();
    let h = currentDate.getHours();
    if (h < 10) {
      h = '0' + h;
    }
    let m = currentDate.getMinutes();
    if (m < 10) {
      m = '0' + m;
    }
    let s = currentDate.getSeconds();
    if (s < 10) {
      s = '0' + s;
    }
    return h * 60 + m;
  };
  console.log(isProd);
  if (!isProd) {
    const amount = req.params.amount;
    const customerEmail = req.body.email;
    stripe.customers.create({
      email: customerEmail,
      card: req.body.id
    })
      .then(customer =>
        stripe.charges.create({
          amount,
          description: 'Commande EasyLunch',
          currency: 'EUR',
          receipt_email: customerEmail,
          customer: customer.id
        }))
      .then(charge => res.json(charge.id));
  } else if (heure > 695 && heure < 1440) {
    res.sendStatus(403);
  } else {
    const amount = req.params.amount;
    const customerEmail = req.body.email;
    stripe.customers.create({
      email: customerEmail,
      card: req.body.id
    })
      .then(customer =>
        stripe.charges.create({
          amount,
          description: 'Commande EasyLunch',
          currency: 'EUR',
          receipt_email: customerEmail,
          customer: customer.id
        }))
      .then(charge => res.json(charge.id));
  }
});


export default router;
