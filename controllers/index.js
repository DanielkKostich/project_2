const router = require('express').Router();
var passport = require('passport');
var session = require('express-session');

// We have to use sequelize for the database, putting another sql system in here with it might get confusing. 
var SQLiteStore = require('connect-sqlite3')(session);

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

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

module.exports = router;
