let User = require('./user');
// import * as my from "my";

exports.foo = function foo(msg: string) {
  console.log(msg.toUpperCase());
}

exports.bar = new User('Jesus!!');

