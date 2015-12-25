/// <reference path="../typings/tsd.d.ts" />

import * as my from "my";

var m = require('./foo/bar');
m.foo('aa');
let u: my.User = m.bar;
console.log(u);
// console.log(User);