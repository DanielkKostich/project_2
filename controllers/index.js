const express = require('express');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { Customer } = require('../models'); // Import the Customer model
const withAuth = require('../utils/auth');
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const app = express();
const path = require('path');

// Middleware

// Passport configuration
passport.use(
  new LocalStrategy(
    {
      usernameField: 'email'
    },
    function (email, password, done) {
      Customer.findOne({ where: { email: email } }) // Use the Customer model instead of User
        .then((customer) => {
          if (!customer) {
            return done(null, false, { message: 'Incorrect email.' });
          }
          if (!customer.validPassword(password)) {
            return done(null, false, { message: 'Incorrect password.' });
          }
          return done(null, customer);
        })
        .catch((err) => done(err));
    }
  )
);

passport.serializeUser((customer, done) => {
  done(null, customer.id);
});

passport.deserializeUser((id, done) => {
  Customer.findByPk(id)
    .then((customer) => {
      done(null, customer);
    })
    .catch((err) => done(err));
});

// Routes
app.use('/api', apiRoutes);
app.use('/', homeRoutes);

app.get('/dashboard', withAuth, (req, res) => {
  res.render('dashboard');
});

app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = app;
