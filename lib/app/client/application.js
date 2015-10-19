var React = require('react');
var app = require('../application');

var Router = require('../../router/components/Router');
var Location = require('../../router/location');

app.prototype.attach = function(el) {

  if (this._el) {
    console.warn('App is already attached');
    this.detach();
  }

  this._el = el;

  var url = document.location.pathname+document.location.search;

  React.render(
    <Router url={url} router={this._router} location={new Location()} context={{app: this}}/>,
    el
  );

  return this;
};

app.prototype.detach = function() {
  this._el = null;
  return this;
};

module.exports = app;
