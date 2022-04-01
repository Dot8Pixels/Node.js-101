const util = require("./mymodule");

const now = require("./mymodule").getCurrentTime
const plus = require("./mymodule").add

console.log(now());
console.log(util.add(50, 100));
console.log(plus(50, 100));

const number = 5000000
console.log(util.formatNumber(number))