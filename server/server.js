const express = require('express'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  port = process.env.PORT || 5000,
  cors = require('cors'),
  cookieParser = require('cookie-parser'),
  querystring = require('querystring'),
  Spotify = require('spotify-web-api-node'),
  app = express();

require('dotenv').config();
const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const REDIRECT_URI = 'http://localhost:5000/callback';
const STATE_KEY = 'spotify_auth_state';
const scopes = ['user-read-private', 'user-read-email'];

const spotifyApi = new Spotify({
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  redirectUri: REDIRECT_URI
});

const generateRandomString = N => (Math.random().toString(36)+Array(N).join('0')).slice(2, N+2);

mongoose.connect(process.env.MLAB_URI, (err) => {
  console.log('Connected to mLab')
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser())

app.get('/', (req, res) => {
  res.end();
})

app.get('/login', (_, res) => {
  const state = generateRandomString(16);
  res.cookie(STATE_KEY, state);
  res.send({url: spotifyApi.createAuthorizeURL(scopes, state)});
});

app.get('/callback', (req, res) => {
  const { code, state } = req.query;
  
  const storedState = req.cookies ? req.cookies[STATE_KEY] : null;
  // first do state validation
  if (state === null || state !== storedState) {
    res.redirect('/#/error/state mismatch');
  // if the state is valid, get the authorization code and pass it on to the client
  } else {
    res.clearCookie(STATE_KEY);
    // Retrieve an access token and a refresh token
    spotifyApi.authorizationCodeGrant(code).then(data => {
      const { expires_in, access_token, refresh_token } = data.body;

      // Set the access token on the API object to use it in later calls
      spotifyApi.setAccessToken(access_token);
      spotifyApi.setRefreshToken(refresh_token);

      // use the access token to access the Spotify Web API
      spotifyApi.getMe().then(({ body }) => {
        res.send(body);
      });

      // we can also pass the token to the browser to make requests from there
      // res.send({access_token: access_token, refresh_token: refresh_token});
    }).catch(err => {
      res.end();
    });
  }
});


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})