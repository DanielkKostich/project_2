const router = require('express').Router();
var passport = require('passport');
var session = require('express-session');

var SQLiteStore = require('connect-sqlite3')(session);

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

var indexRouter = require('./routes/index');
var authRouter = require('./routes/auth');

app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  store: new SQLiteStore({ db: 'sessions.db', dir: './var/db' })
}));
app.use(passport.authenticate('session'));
app.use('/', indexRouter);
app.use('/', authRouter);

module.exports = router;
