console.log("Control flow statements");

const age=40;
if(age == 18) {
    console.log("You are 18 years old");
} else if(age < 18) {
    console.log("You are a kid");
} else {
    console.log("you are old");
}

const day="Monday";
switch(day) {
    case "Monday":
        console.log("Start of the week");
        break;
    case "Friday":
        console.log("End of the week");
        break;
    default:
        console.log("regular day");
}

let a=10;
console.log(a === 5 ? "a is equal to 5" : " a is not equal to 5");