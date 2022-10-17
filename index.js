const { interfaces } = require("mocha");

function add(a, b) {
return a + b;
}

function subtract(a, b) {
return a - b;
}
function multiply(a, b) {
return a * b;
}
function divide(a, b) {
return a/b;
}
function increment(a, b){
    return ++a;
}
function decrement(a, b){
return --a;
}

function makeInt(n){
  return parseInt(n, 10)

}
function preserveDecimal(n){
    return parseFloat(n)
}