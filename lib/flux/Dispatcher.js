
/**
 * A dispatcher
 * @constructor
 */
function Dispatcher() {

  /**
   * The callbacks
   * @private
   * @type {Array.<function>}
   */
  this._handlers = [];
  this._dispatching = false;

}

/**
 *
 * @returns {boolean}
 */
Dispatcher.prototype.isDispatching = function() {
  return this._dispatching;
};

/**
 * Register a callback
 * @param   {function} callback
 * @returns {Dispatcher}
 */
Dispatcher.prototype.register = function(callback) {
  this._handlers.push(callback);
  return this;
};

/**
 * Unregister a callback
 * @param   {function} callback
 * @returns {Dispatcher}
 */
Dispatcher.prototype.unregister = function(callback) {
  throw new Error();
  return this;
};

/**
 * Dispatch an event
 * @param   {*} payload
 * @returns {Dispatcher}
 */
Dispatcher.prototype.dispatch = function(payload) {
  this._dispatching = true;
  for (var i=0; i<this._handlers.length; ++i) {
    this._handlers[i](payload);
  }
  this._dispatching = false;
  return this;
};

