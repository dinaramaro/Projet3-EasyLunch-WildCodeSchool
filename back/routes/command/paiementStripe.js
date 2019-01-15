import express from 'express';
import Stripe from 'stripe';
import { privateKeyStripe } from '../myAccount/secretOrKey';

const router = express.Router();
const stripe = Stripe(privateKeyStripe);

router.post('/:amount', (req, res) => {
  const amount = req.params.amount;
  stripe.customers.create({
    email: req.body.email,
    card: req.body.id
  })
    .then(customer =>
      stripe.charges.create({
        amount,
        description: '',
        currency: 'EUR',
        customer: customer.id
      }))
    .then(charge => res.send(charge))
    .catch((err) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.sendStatus(200);
      }
    });
});


export default router;
