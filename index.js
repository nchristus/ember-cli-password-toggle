/* jshint node: true */
'use strict';

var path = require('path');

module.exports = {
  name: 'ember-cli-password-toggle',
  included: function(app) {
    app.import(path.join('vendor', 'password-toggle.css'));
  }
};
