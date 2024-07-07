var JsError = require("paul4156-base/js-error");
var myFunction = require("paul4156-server/index");
const isInstanceOf = require("is-instance-of");

try {
  myFunction();
} catch (error) {
  if (isInstanceOf(error, JsError)) {
    console.error("caught");
  } else {
    console.error("missed");
  }
}
