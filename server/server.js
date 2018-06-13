const express = require('express'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  port = process.env.PORT || 5000,
  passport = require('passport'),
  session = require('express-session')
  cors = require('cors'),
  cookieParser = require('cookie-parser'),
  app = express();

require('dotenv').config();

mongoose.connect(process.env.MLAB_URI, (err) => {
  console.log('Connected to mLab')
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(passport.initialize())
app.use(passport.session())
app.use(session({ secret: 'keyboard cat' }))

app.get('/', (req, res) => {
  res.end();
})

require('./passport/config')(passport);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})