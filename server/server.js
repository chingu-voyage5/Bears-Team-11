const express = require('express'),
      helmet = require('helmet'),
      morgan = require('morgan'),
      bodyParser = require('body-parser'),
      cors = require('cors');
      mongoose = require('mongoose'),
      expressSession = require('express-session'),
      MongoStore = require('connect-mongo')(expressSession),
      passport = require('passport'),
      { graphqlExpress, graphiqlExpress } = require('apollo-server-express'),
      port = process.env.PORT || 5000,
      app = express(),
      schema = require('./graphql/schema');

require('dotenv').config();

app.use(helmet());
app.use(morgan('dev'));
app.use(cors());

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

app.use('/graphql',
  bodyParser.json(),
  graphqlExpress({ schema })
);

app.use('/graphiql',
  graphiqlExpress({ endpointURL: '/graphql' })
);

app.get('/', (_, res) => {
  res.render('/');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  console.log('Go to http://localhost:5000/graphiql to run queries!');
})