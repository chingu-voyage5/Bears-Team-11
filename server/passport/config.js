const SpotifyStrategy = require('./index').Strategy;

module.exports = function (passport) {
    passport.use(new SpotifyStrategy({
        clientID: process.env.SPOTIFY_CLIENT_ID,
        clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
        callbackURL: 'http://localhost:8888/callback'
    },
        function (accessToken, refreshToken, expires_in, profile, done) {
            // asynchronous verification, for effect...
            process.nextTick(function () {
                // To keep the example simple, the user's spotify profile is returned to
                // represent the logged-in user. In a typical application, you would want
                // to associate the spotify account with a user record in your database,
                // and return that user instead.
                return done(null, profile);
            });
        }));

    passport.serializeUser(function (user, done) {
        done(null, user);
    });

    passport.deserializeUser(function (obj, done) {
        done(null, obj);
    });
}