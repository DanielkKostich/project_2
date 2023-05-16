const express = require('express');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { User } = require('../models');
const withAuth = require('../utils/auth');

<<<<<<< HEAD
const app = express();
=======
// We have to use sequelize for the database, putting another sql system in here with it might get confusing. 
var SQLiteStore = require('connect-sqlite3')(session);
>>>>>>> 0488c9dab69f35323710a7e99decaf5650360419

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  })
);

// Passport configuration
passport.use(
  new LocalStrategy(
    {
      usernameField: 'email'
    },
    function (email, password, done) {
      User.findOne({ where: { email: email } })
        .then((user) => {
          if (!user) {
            return done(null, false, { message: 'Incorrect email.' });
          }
          if (!user.validPassword(password)) {
            return done(null, false, { message: 'Incorrect password.' });
          }
          return done(null, user);
        })
        .catch((err) => done(err));
    }
  )
);

<<<<<<< HEAD
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findByPk(id)
    .then((user) => {
      done(null, user);
    })
    .catch((err) => done(err));
});
=======
// var indexRouter = require('./routes/index');
// var authRouter = require('./routes/auth');

// We can't have more than 1 session at a time. I've left the one in the server.js file up
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(session({
//   secret: 'keyboard cat',
//   resave: false,
//   saveUninitialized: false,
//   store: new SQLiteStore({ db: 'sessions.db', dir: './var/db' })
// }));
// app.use(passport.authenticate('session'));

//Currently these point to nothing so I've disabled them.
// app.use('/', indexRouter);
// app.use('/', authRouter);
>>>>>>> 0488c9dab69f35323710a7e99decaf5650360419

// Routes
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/login'
  })
);

app.get('/dashboard', withAuth, (req, res) => {
  res.render('dashboard');
});

app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = app;
