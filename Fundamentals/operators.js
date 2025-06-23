console.log("hello");
console.log(10>5);
console.log(10 === "10");
const a=true, b=false;
console.log( a && b);
console.log(a || b);
const res=5 & 1;
console.log(res);

const age=18;
const status=age >= 18 ?  "Adult" : "Minor";
console.log(status);

let n1, n2;
const result = (n1=1, n2=2, n1+n2);
console.log(result);

let x=5;
console.log(++x);
console.log(x--);

const obj1={ length: 10 };
console.log("length" in obj1);
console.log([] instanceof Array);

const s="Hello" + " " + "World";
console.log(s);

const obj2 = { name: "Presidio", address: { city: "New York", phone: 123456855 }  };
console.log(obj2.name);
console.log(obj2.address?.city);
console.log(obj2.address?.state); //undefined