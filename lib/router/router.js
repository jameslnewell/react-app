var React = require('react');
var router = require('no-frills-router');
var Context = require('./components/Context');
var extend = require('extend');

var browser = typeof window === 'object';

/**
 * Router
 * @constructor
 * @returns {ReactRouter}
 */
function ReactRouter() {

  if (!(this instanceof ReactRouter)) {
    return new ReactRouter();
  }

  /**
   * The router
   * @private
   * @type {router}
   */
  this._router = router();

  /**
   * The container
   * @private
   * @type {React.Component}
   */
  this._container = null;

}

ReactRouter.prototype = {

  /**
   * Map a URL pattern to a component
   * @param   {string}          [name]
   * @param   {string|RegExp}   pattern
   * @param   {React.Component} component
   * @param   {Object}          [context]
   * @returns {ReactRouter}
   */
  map: function(name, pattern, component, context) {
    this._router.map(name, pattern, component, context);
    return this;
  },

  /**
   * Route a URL to a component
   * @param   {string}    url       The URL
   * @param   {object}    context
   * @param   {function}  callback
   * @returns {ReactRouter}
   */
  route: function(url, context, callback) {
    var self = this;
    var route = this._router.route(url);

    //check if there is a route
    if (!route) {
      return route;
    }

    route.component = React.createElement(Context, extend({}, context, {
      router:     self,
      component:  route.handler,
      container:  self._container
    }));

    delete route.handler;

    return route;
  },

  assemble: function(name, params) {
    return this._router.assemble(name, params);
  }

};

module.exports = ReactRouter;