const express = require('express');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { Customer } = require('../models');
const withAuth = require('../utils/auth');
const bcrypt = require('bcrypt');
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
      Customer.findOne({ where: { email: email } })
        .then(async (user) => {
          if (!user) {
            return done(null, false, { message: 'Incorrect email.' });
          }
          const validPassword = await bcrypt.compare(password, user.password);
          if (!validPassword) {
            return done(null, false, { message: 'Incorrect password.' });
          }
          return done(null, user);
        })
        .catch((err) => done(err));
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  Customer.findByPk(id)
    .then((user) => {
      done(null, user);
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
