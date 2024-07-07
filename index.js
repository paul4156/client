var JsError = require("paul4156-base/js-error");
var myFunction = require("paul4156-server/index");

try {
  myFunction();
} catch (error) {
  if (error instanceof JsError) {
    console.error("caught");
  } else {
    console.error("missed");
  }
}
