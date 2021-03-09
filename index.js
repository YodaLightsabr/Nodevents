const { EventEmitter } = require('events');
var events = {};
const ensureChannel = (channel) => {
  if (!events[channel]) events[channel] = new EventEmitter();
}
class Endpoint {
  constructor (channel = "default") {
    this.channel = channel;
  }
  on (...args) {
    ensureChannel(this.channel);
    events[this.channel].on(...args);
  }
  emit (...args) {
    ensureChannel(this.channel);
    events[this.channel].emit(...args);
  }
}
module.exports = new Endpoint();
