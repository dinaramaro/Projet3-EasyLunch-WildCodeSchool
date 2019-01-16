import express from 'express';
import Stripe from 'stripe';
import { privateKeyStripe } from '../myAccount/secretOrkey';

const router = express.Router();
const stripe = Stripe(privateKeyStripe);

router.post('/:amount', (req, res) => {
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
    .then(charge => res.json(charge.id))
    .catch((err) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.sendStatus(200);
      }
    });
});


export default router;
