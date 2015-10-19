var app = require('..');

function delayedInit(ctx, done) {
  console.log('delaying...', ctx);
  setTimeout(function() {
    console.log('delayed.', ctx);
    done();
  }, 1000)
}

module.exports = app()
  .map('home', '/', require('./lib/pages/Home'), {init: delayedInit})
  .map('about', '/about', require('./lib/pages/About'))
;