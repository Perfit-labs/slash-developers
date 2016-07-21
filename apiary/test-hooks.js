'use strict';

var hooks = require('hooks');
var delay = 1000/6.0;

hooks.afterEach(function (transaction, done) {
  setTimeout(done, delay);
});

hooks.beforeEach(function (transaction) {
  // _ in URI parameter values raises a blueprint linter warning
  var path = transaction.fullPath;
  if (/sync_token/.test(path)) {
    transaction.fullPath = path.replace(/--/, '_');
  }
});
