/* global variables are bad */

var x = 5;
function globalVar() {
    x = 3;

    console.log(x); // 3
}
console.log(x); // 3


var x = 5;
function localVar() {
    var x = 2;

    console.log(x); // 2
}
console.log(x); // 5

/* named functions create a global variable too */
console.log(globalVar);
console.log(localVar);