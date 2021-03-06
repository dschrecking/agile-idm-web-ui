var passport = require('passport');
var express = require('express');

function RouterPassport(router) {

  //Github
  router.route('/github').get(
    passport.authenticate('github'),
    function (req, res) {}
  );

  router.route('/callback_github').get(
    passport.authenticate('github', {
      successReturnToOrRedirect: '/',
      failureRedirect: '/login'
    })
    //handleRedirect.bind(this, "github")
  );
  return router;
}
module.exports = RouterPassport;
