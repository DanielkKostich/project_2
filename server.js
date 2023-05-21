const path = require('path');
const express = require('express');
const session = require('express-session');
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

// Set up middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: false,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));
app.use(cors({ origin: '*', methods: 'PUT'}));
app.use(passport.initialize());
app.use(passport.authenticate('session'));


// Set up view engine
const handlebars = require('express-handlebars');
app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


  sequelize.sync({ force: false }).then(() => {
    app.listen(port, () => console.log('Now listening at http://localhost:3001/'));
  });