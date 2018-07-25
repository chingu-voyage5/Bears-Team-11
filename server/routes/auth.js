const router = require('express').Router();
      scope = ['user-read-private', 'user-read-email', 'playlist-modify-private', 'playlist-modify-public'],
      passport = require('passport');

require('../lib/passport')(passport);
require('dotenv').config();

module.exports = () => {
  router.get('/logout', (req, res) => {
    req.logOut();
    req.session = null;
    res.redirect('/');    
  });

  router.get('/login',
    passport.authenticate('spotify', {
      scope,
      showDialog: true,
      display: 'popup',
    }),
  );

  router.get('/callback',
    passport.authenticate('spotify', {
      // make a component to show error message
      failureRedirect: 'http://localhost:3000/fail',
    }),
    (_, res) => {
      // component to close popup and update user name from db
      res.redirect('http://localhost:3000/success')
    },
  );

  return router;
}
