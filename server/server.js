const express = require('express'),
      morgan = require('morgan');
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      expressSession = require('express-session');
      MongoStore = require('connect-mongo')(expressSession);
      passport = require('passport');
      port = process.env.PORT || 5000,
      app = express();

require('dotenv').config();

app.use(morgan('dev')); 

mongoose.connect(process.env.MLAB_URI, (err) => {
  if (err) console.error(err)
  console.log('Connected to mLab')
})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('trust proxy', 1) // secure cookie but served over http
app.use(expressSession({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { httpOnly: true, secure: true },
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
}))

app.use(passport.initialize());
app.use(passport.session());


const authRoutes = require('./routes/auth');
app.use(authRoutes());

app.get('/', (_, res) => {
  res.render('/');
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})