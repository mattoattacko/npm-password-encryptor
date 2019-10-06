var bcrypt = require('bcrypt');
var colors = require('colors');

var plainTextPassword = "password";

bcrypt.genSalt(10, function(err,salt) {
  bcrypt.hash(plainTextPassword, salt, function(err,hash) {
    console.log(hash.green);
  });
});