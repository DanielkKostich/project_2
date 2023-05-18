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

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const app = express();
const port = process.env.PORT || 3001;

// Set up middleware
app.use(express.json());

app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false
}));
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
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));
app.use(cors({ origin: '*', methods: 'PUT'}));

app.use(passport.initialize());
app.use(passport.session());


// Set up view engine
const handlebars = require('express-handlebars');
app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
// Set up Passport.js authentication strategy
passport.use(new LocalStrategy(
  async (username, password, done) => {
    try {
      const user = await User.findOne({ username: username });
      if (!user) {
        return done(null, false, { message: 'Incorrect username or password.' });
      }
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return done(null, false, { message: 'Incorrect username or password.' });
      }
      return done(null, user);
    } catch (error) {
      return done(error);
    }
  }
));

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});

// Set up routes



// app.post('/login', passport.authenticate('local', {
//   successRedirect: '/',
//   failureRedirect: '/login',
//   failureFlash: true
// }));

// app.get('/register', (req, res) => {
//   res.render('register');
// });

// app.post('/register', async (req, res) => {
//   try {
//     const { username, email, password } = req.body;
//     const existingUser = await User.findOne({ username: username });
//     if (existingUser) {
//       return res.render('register', { message: 'Username already taken.' });
//     }
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const user = new User({ username: username, email: email, password: hashedPassword });
//     await user.save();
//     req.login(user, (error) => {
//       if (error) {
//         return next(error);
//       }
//       return res.redirect('/');
//     });
//   } catch (error) {
//     return res.render('register', { message: 'Error creating user.' });
//   }
// });

// API routes

  
  sequelize.sync({ force: false }).then(() => {
    app.listen(port, () => console.log('Now listening at http://localhost:3001/'));
  });