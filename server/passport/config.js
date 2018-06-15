const SpotifyStrategy = require('passport-spotify').Strategy;

module.exports = function (passport) {
    passport.use(new SpotifyStrategy({
        clientID: process.env.SPOTIFY_CLIENT_ID,
        clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
        callbackURL: 'http://localhost:5000/callback'
    },
        function (accessToken, refreshToken, expires_in, profile, done) {
            // asynchronous verification, for effect...
            console.log(profile)
            return done(null, profile);
        }));

    passport.serializeUser(function (user, done) {
        done(null, user);
    });

    passport.deserializeUser(function (obj, done) {
        done(null, obj);
    });
}