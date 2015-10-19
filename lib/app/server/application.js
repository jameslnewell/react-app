var react = require('react');
var app = require('../application');
var locator = require('service-oracle');

app.prototype.handle = function(req, res) {
  var route = this._router.route(req.url, {locator: locator().locator(this._locator)});

  //check there is a route to render
  if (!route) {
    res.status(404);
    res.end('Route not found.');
    return;
  }

  //check there is a component to render
  if (!route.component) {
    res.status(500);
    res.end('Route component not specified.');
    return;
  }

  //render the component
  res.status(route.status || 200);
  res.end(react.renderToStaticMarkup(route.component));

};

module.exports = app;
