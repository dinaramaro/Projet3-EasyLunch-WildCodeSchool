import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import Debug from 'debug';
import express from 'express';
import logger from 'morgan';
import path from 'path';
import cors from 'cors';
import {} from 'dotenv/config';
// import favicon from 'serve-favicon';

import FAQ from './routes/admin/faq';
import CGV from './routes/admin/cgv';
import politic from './routes/admin/politic';
import partners from './routes/admin/partners';
import team from './routes/admin/team';
import concept from './routes/admin/concept';
import search from './routes/search';
import restaurant from './routes/restaurant';
import codeToIdRestaurant from './routes/participation/codeToIdRestaurant';
import cards from './routes/cards';
import signUp from './routes/myAccount/signUp';
import signIn from './routes/myAccount/signIn';
import checkConnected from './routes/myAccount/checkConnected';
import command from './routes/command/command';
import changePassword from './routes/myAccount/changePassword';
import reservationHistory from './routes/myAccount/reservationHistory';
import contact from './routes/admin/contact';
import contactrestaurant from './routes/admin/contactrestaurant';
import participation from './routes/participation/participation';
import paiementStripe from './routes/command/paiementStripe';
import mailContact from './routes/mail/mailContact';
import shareCodeMail from './routes/mail/shareCodeMail';

const app = express();
const debug = Debug('back:app');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(cookieParser());
app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));


app.use('/api/restaurant', restaurant);
app.use('/api/admin/cgv', CGV);
app.use('/api/admin/faq', FAQ);
app.use('/api/admin/politic', politic);
app.use('/api/admin/partners', partners);
app.use('/api/search', search);
app.use('/api/admin/team', team);
app.use('/api/idrestaurant', codeToIdRestaurant);
app.use('/api/cards', cards);
app.use('/api/admin/concept', concept);
app.use('/api/signup', signUp);
app.use('/api/signin', signIn);
app.use('/api/checked', checkConnected);
app.use('/api/command', command);
app.use('/api/changepassword', changePassword);
app.use('/api/admin/contact', contact);
app.use('/api/admin/contact-restaurant', contactrestaurant);
app.use('/api/participate', participation);
app.use('/api/reservationhistory', reservationHistory);
app.use('/api/pay', paiementStripe);
app.use('/api/mailcontact', mailContact);
app.use('/api/sendcodemail', shareCodeMail);

// Uncomment on pre-prod/prod
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
/* eslint no-unused-vars: 0 */
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.json(err);
});

// Handle uncaughtException
process.on('uncaughtException', (err) => {
  debug('Caught exception: %j', err);
  process.exit(1);
});

export default app;
