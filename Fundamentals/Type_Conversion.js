console.log("This is type conversion");


let s="123";
let n=Number(s);
console.log(n);

let n1=123;
let s1=String(n1);
console.log(s1);

let bool=true;
let num=Number(bool);
console.log(num);

let bl=true;
let str=String(bl);
console.log(str);

let n2=5;
let s2="5";
let res=n2 + s2;
console.log(res);
console.log(typeof(res));

let boolean=true;
let n3=10;
let res2=boolean+n3;
console.log(res2);

let s3="10";
let n4=10;
console.log(s3 == n4); // it will consider the content alone not the data type

let s5="";
if (s5) {
    console.log("This won't print");
} else {
    console.log("This will print");
}