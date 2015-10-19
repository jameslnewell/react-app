var router = require('../router/router');

/**
 * An isomorphic application
 * @constructor
 * @returns {Application}
 */
function Application(options) {

  if (!(this instanceof Application)) {
    return new Application(options);
  }

  options       = options || {};
  this._locator = options.locator;
  this._router  = router();

}

Application.prototype = {

  /**
   * Use a plugin
   * @param   {function(Application)}   plugin
   * @returns {Application}
   */
  use: function(plugin) {
    plugin(this);
    return this;
  },

  /**
   * Map a route to a module
   * @param   {string|RegExp}           pattern
   * @param   {Object}                  component
   * @returns {Application}
   */
  map: function(name, pattern, component, options) {
    options = options || {name: name};
    this._router.map(pattern, component, options);
    return this;
  }

};

module.exports = Application;
