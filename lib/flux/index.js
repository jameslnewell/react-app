var Dispatcher = require('./Dispatcher');

/**
 * Flux context
 * @constructor
 */
function FluxContext(options) {
  this.dispatcher = options.dispatcher || new Dispatcher();
}

FluxContext.prototype = {

  action: function(name) {

  },

  store: function(name) {

  }

};

modules.exports = FluxContext;