var express = require('express');
var passport = require('passport');
var LocalStrategy = require('passport-local');
var bcrypt = require('bcrypt');
// var db = require('../db');
var router = express.Router();

// passport.use(new LocalStrategy(function verify(username, password, cb) {
//   db.get('SELECT * FROM users WHERE username = ?', [ username ], function(err, user) {
//     if (err) { return cb(err); }
//     if (!user) { return cb(null, false, { message: 'Incorrect username or password.' }); }

//     bcrypt.pbkdf2(password, user.salt, 310000, 32, 'sha256', function(err, hashedPassword) {
//       if (err) { return cb(err); }
//       if (!bcrypt.timingSafeEqual(user.hashed_password, hashedPassword)) {
//         return cb(null, false, { message: 'Incorrect username or password.' });
//       }
//       return cb(null, user);
//     });
//   });
// }));

router.get('/login', function(req, res, next) {
  res.render('login');
});

passport.serializeUser(function(user, cb) {
  process.nextTick(function() {
    return cb(null, {
      id: user.id,
      username: user.username,
      picture: user.picture
    });
  });
});

passport.deserializeUser(function(user, cb) {
  process.nextTick(function() {
    return cb(null, user);
  });
});

router.post('/login/password', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login'
}));

router.post('/logout', function(req, res, next) {
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
});

router.get('/signup', function(req, res, next) {
  res.render('signup');
});

// router.post('/signup', function(req, res, next) {
//   var salt = bcrypt.randomBytes(16);
//   bcrypt.pbkdf2(req.body.password, salt, 310000, 32, 'sha256', function(err, hashedPassword) {
//     if (err) { return next(err); }
//     db.run('INSERT INTO users (username, hashed_password, salt) VALUES (?, ?, ?)', [
//       req.body.username,
//       hashedPassword,
//       salt
//     ], function(err) {
//       if (err) { return next(err); }
//       var user = {
//         id: this.lastID,
//         username: req.body.username
//       };
//       req.login(user, function(err) {
//         if (err) { return next(err); }
//         res.redirect('/');
//       });
//     });
//   });
// });

module.exports = router;
