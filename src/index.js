const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const secretKey = '6LcAQioaAAAAAPzVsOtXMQkWIST80eeXVuWhJdzo';
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
const flash = require('connect-flash');
const session = require('express-session');
const mySQLStore = require('express-mysql-session');
const passport = require('passport');

const { database } = require('./keys');

//Inicializar
const app = express();
require('./lib/passport');

//Settings
app.set('port', process.env.PORT || 14000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs',
  helpers: require('./lib/handlebars')
}));
app.set('view engine', '.hbs');

app.post('/verify', () => {
  if (!req.body.captcha) {
    res.json({ 'msg': 'Captcha token is undefined' });
  }
  const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${req.body.captcha}`;

  request(verifyUrl, (err, response, body) => {
    if (err) {
      console.log(err);
    }
    body = JSON.parse(body);
    if (!body.success || body.score < 0.4) {
      return res.json({ 'msg': 'You might be a robot, sorry!! You are banned!', 'score': body.score });
    }

    return res.json({ 'msg': 'You have been verified! You may proceed', 'score': body.score });
  });
});

//Middlewares
app.use(session({
  secret: 'k1nocomhandlebarssession',
  resave: false,
  saveUninitialized: false,
  store: new mySQLStore(database)
}));
app.use(flash());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

//Globales
app.use((req, res, next) => {
  app.locals.success = req.flash('success');
  app.locals.message = req.flash('message');
  app.locals.user = req.user;
  next();
});

//Routes
app.use(require('./routes'));
app.use(require('./routes/authentication'));
app.use('/links', require('./routes/links'));

//Public
app.use(express.static(path.join(__dirname, 'public')));

//Starting
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
});