const router = require("express").Router();
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const { Customer, Employee } = require('../../models');

passport.use(new LocalStrategy(
  async function(email, password, done) {
    try {
      // Find the user who matches the email address
      const user = await Customer.findOne({where: { email: req.body.email },});
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
  process.nextTick(function() {
    return cb(null, {
      id: user.id,
      username: user.username,
    });
  });
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
  session: true,
  failureRedirect: '/login',
  failureMessage: true,
}));


module.exports = router;
