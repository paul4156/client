This demonstrates an issue of `instanceof` when dependencies have a major version difference.
* `core` is 2.0.0 in `client`, but 1.0.1 in `server`
* `client` depends on both `core` and `server`

`instanceof` will fail to detect `JsError` class.

Run `node index.js` and will see `missed` in console.
