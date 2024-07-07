This demonstrates an issue of `instanceof` when dependencies have a major version difference.
* `base` is 2.0.0 in `client`, but 1.0.1 in `server`
* `client` depends on both `base` and `server`

`instanceof` will fail to detect `JsError` class.

Run `node index.js` and will see `missed` in console.
