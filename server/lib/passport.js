const passport = require('passport');
      SpotifyStrategy = require('passport-spotify').Strategy;
      User = require('../models/user');
      clientID = process.env.SPOTIFY_CLIENT_ID;
      clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
      callbackURL = 'http://localhost:5000/callback';

require('dotenv').config();

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      if (err) console.error(err);
      done(null, user);
    })
  });

  passport.use(new SpotifyStrategy({
    clientID,
    clientSecret,
    callbackURL,
  },
    function (accessToken, refreshToken, profile, done) {
      User.findOne({ spotify_id: profile.id})
        .then((currentUser => {
          if (currentUser) {
            done(null, currentUser)
          }
          else {
            new User({
              name: profile.username,
              spotify_id: profile.id,
              access_token: accessToken,
              refresh_token: refreshToken,
            })
            .save()
            .then(newUser => done(null, newUser))
            .catch(error => console.error('error', error));
          }
        }));
    }
  ));
};
