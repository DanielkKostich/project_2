const router = require("express").Router();
const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const { Customer, Employee } = require('../../models');

passport.use(new LocalStrategy(
  async function(email, password, done) {
    try {
      // Find the user who matches the email address
      const user = await Customer.findOne({where: { email: email },});
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


passport.serializeUser(function(user, done) {
  return done(null, {
    id: user.customer_id,
    username: user.username,
  });
});

passport.deserializeUser(async function(id, done) {
  try {
    const user = await Customer.findByPk(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  session: true,
  failureRedirect: '/login',
  failureMessage: true,
  successFlash: 'Login Successful!'
}));


module.exports = router;
