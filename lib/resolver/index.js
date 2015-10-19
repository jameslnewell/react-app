/**
 * Resolver
 * @constructor
 */
function Resolver() {
  this._promises = [];
}

Resolver.prototype = {

  monitor: function(promise) {
    this._promises.push(promise);
    return this;
  }

};

function render(component) {
  React.renderToStaticMarkup(component);
  Promise.all(this._promises);
  return React.renderToStaticMarkup(component);
}

