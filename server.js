const path = require('path');
const express = require('express');
const expressFlash = require('express-flash');
const session = require('express-session');
const connectFlash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const customerRoutes = require('./controllers/api/customerRoutes');
const exphbs = require('express-handlebars');
const cors = require('cors');
const { Customer } = require('./models');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.engine('handlebars', exphbs({ helpers }));
app.set('view engine', 'handlebars');

// Express session
app.use(
  session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize,
    }),
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Flash messages
app.use(expressFlash());
app.use(connectFlash());

// Local strategy
passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
    },
    function (email, password, done) {
      Customer.findOne({ where: { email: email } })
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

// Serialize and deserialize user
passport.serializeUser(function(customer, done) {
   done(null, {
    id: customer.customer_id,
    username: customer.username,
  });
});

passport.deserializeUser((id, done) => {
  Customer.findByPk(id)
    .then((customer) => {
      done(null, customer);
    })
    .catch((err) => done(err));
});

// Routes
app.use('/', routes);
app.use('/api/customers', customerRoutes);

// Start server
sequelize.sync({ force: false }).then(() => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});
