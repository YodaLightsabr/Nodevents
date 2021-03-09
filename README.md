# Nodevents
A super simple way to emit global events in Node

## Demonstration
index.js
```js
const Nodevents = require('nodevents');
Nodevents.on('foo', console.log);
require('./test.js');
```
test.js
```js
const Nodevents = require('nodevents');
Nodevents.emit('foo', 'bar');
```
console output:
```
bar
```
You can also subscribe or send events to a different channel by setting `Nodevents.channel`.
