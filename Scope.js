/*
console.log("Scope in javascript");
var globalVar="I am global";
console.log(window.globalVar);

//let globalLet="I am block-scoped";
//console.log(window.globalLet); //undefined

// Block scope
// var data type alone has the global scope
/*
if (true) {
    var x=10;
    let y=20;
    const z=30;
}
console.log(x); 
//console.log(y);
//console.log(z);


//Function scope
function fun() {
    var x1=10;
    let y=20;
    const z=30;
    console.log(x1,y, z);
}
fun();
//console.log(x1);


//Modular scope
const PI=3.14;
function add(a,b) {
    return a + b;
}
//module.exports = {PI, add};

//Lexical Scope(Closures)
function outer() {
    let outerVar = "I am in the outer scope";
    function inner() {
        console.log(outerVar);
    }
    inner();
}
outer();

let globalLet = "This is a global variable";
{
    let localLet = "This is a local variable";
    console.log(globalLet);

    console.log(localLet);
}

let GlobalLet = "This is a Global variable";
function fun() {
    let LocalLet = "This is a Local variable";
}
fun();
console.log(GlobalLet);
console.log(LocalLet);


let globalLet = "This is global";
function fun() {
     localLet="This is local";
}
fun();
console.log(globalLet);
console.log(localLet);

let globalLet = "This is a global variable";
function fun() {
    let globalLet = "This is a local variable";

}
fun();
console.log(globalLet);


let globalLet = "This is a global variable";

function fun() {
    let globalLet = "This is a local variable";
    console.log(globalLet);
}
fun();

*/

let globalLet = "This is a global variable";

function fun() {
    let globalLet = "This is a local variable";
    console.log(window.globalLet); // This is a global variable
}
fun();