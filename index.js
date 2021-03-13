const { EventEmitter } = require('events');
var events = {};
const ensureChannel = (channel) => {
  if (!events[channel]) events[channel] = new EventEmitter();
}
class Endpoint {
  /**
   * Create an Nodevents endpoint
   * @param {string} [channel=default] - The channel for the endpoint
   */
  constructor (channel = "default") {
    this.channel = channel;
  }
  /**
   * Emit an event
   * @param {string} event - The event you want to listen for
   * @param {...*} data - The data you want to receive with the event
   */
  on (...args) {
    ensureChannel(this.channel);
    events[this.channel].on(...args);
  }
  /**
   * Emit an event
   * @param {string} event - The event you want to listen for once
   * @param {...*} data - The data you want to receive with the event
   */
  once (...args) {
    ensureChannel(this.channel);
    events[this.channel].once(...args);
  }
  /**
   * Emit an event
   * @param {string} event - The event you want to emit
   * @param {...*} data - The data you want to send with the event
   */
  emit (...args) {
    ensureChannel(this.channel);
    events[this.channel].emit(...args);
  }
}
module.exports = new Endpoint();
