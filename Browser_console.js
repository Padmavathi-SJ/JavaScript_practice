console.log("Hello, World!");

console.error("This is an error message");

console.warn("This is a warning message");

console.info('%cThis is a styled info message!', 'color: yellow; font-size: 16px; font-weight: bold;');

console.table([{ name: "Padma", age: 20}, {name: "kavi", age:50}]);

console.time('timer1');
function loops() {
    for (let i=0; i<=10000; i++) {
        
    }
}
loops()
console.timeEnd('timer1'); //timer1: 0.291015625 ms

console.assert(5 > 10, "This assertion failed"); //Assertion failed: This assertion failed

console.group('User Information');
console.log('Name: Padma');
console.log('Age: 20');
console.groupEnd();

console.count("countLabel");
console.count("countLabel");

//countLabel: 1
//countLabel: 2

function a() {
    b()
}
function b() {
    c()
}
function c() {
    console.trace()
}
a()