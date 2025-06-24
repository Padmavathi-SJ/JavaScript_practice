console.log("Functions")

function welcomeMsg(name) {
    return ("Hello " + name + " Welcome to Presidio");
}
let nameVal = "Padma";
console.log(welcomeMsg(nameVal));

const mul = function(x, y) {
    return x * y;
}
console.log(mul(4, 5));

//Arrow Functions
//let function_name = (arg1, arg2, ...) => expression

//Example 1
const a = ["Hydrogen", "Helium", "Lithium", "Beryllium"];
const a2 = a.map(function (s) {
    return s.length;
})
console.log("Normal way ", a2);

const a3 = a.map((s) => s.length);

console.log("Using Arrow Function ", a3);

//Example 2
const b = ["Hi", "I", "am", "Presidio", "Employee"];
const b2 = b.map(function (b) {
    return b.length;
})
console.log("Normal way: ", b2);
//Arrow function
const b3 = b.map((b) => b.length);
console.log("Using Arrow Function: ", b3);

//Example 3
const c1 = [1, 2, 3, 4, 5];
const c2 = [10, 20, 30, 40, 50];
const c3 = c1.map(function (element, index) {
    return element * c2[index];
})
console.log("Now: ", c3);

//Uisng Arrow Functions

const c4 = [1, 2, 3, 4, 5];
const c5 = [10, 20, 30, 40, 50];
const c6 = c4.map(function (element, index) {
    return element * c5[index];
})
console.log("using Arrow: ", c6);

//Immediately invoked function
(function () {
    console.log("This runs immediately!");
}) ();

//Callback Functions - A function is passed as an argument to other functions
//Example 1
function num(n, callback) {
    return callback(n);
}
const double = (n) => n*2;
console.log(num(5, double))

//Example 2
function num2(d, callback) {
    return callback(d);
}
const func2 = (d) => d + 10;
console.log(num2(10, func2));

//Anonymous Functions - a function without a name, used as args to other functions
setTimeout(function () {
    console.log("Anonymous functions executed!");
}, 2000);


//Nested Functions
function outerFun(a) {
    function innerFun(b) {
        return a + b;
    }
    return innerFun;
}
const addTen = outerFun(10);
console.log(addTen(5));

function pureAdd(a, b) {
    return a + b;
}
console.log(pureAdd(2, 3));

const add = (a, b) => a + b;
console.log(add(5, 3));