const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const { Customer, Employee } = require('../models');

const router = express.Router();

passport.use(new LocalStrategy(
  { usernameField: 'email' }, // The name of the email field in the HTML form
  async function(email, password, done) {
    try {
      // Find the user who matches the email address
      const user = await Customer.findOne({ where: { email } });
      if (!user) {
        return done(null, false, { message: 'Incorrect email or password.' });
      }

      // Verify the password
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        return done(null, false, { message: 'Incorrect email or password.' });
      }

      return done(null, user);
    } catch (err) {
      return done(err);
    }
  }
));

passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(async function(id, cb) {
  try {
    const user = await Customer.findByPk(id);
    cb(null, user);
  } catch (err) {
    cb(err);
  }
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login'
}));

module.exports = router;
