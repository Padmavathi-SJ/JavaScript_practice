console.log("Function Binding");

/*
const person = {
    name: 'PRESIDIO',
    greet: function() {
        console.log('Hello, ' + this.name);
    }
};
const greet = person.greet;
greet();


//Methods of Function Binding

//bind method
const person = {
    name: 'PRESIDIO',
    greet: function() {
        console.log('Hello, ' + this.name);
    }
};
const greet = person.greet;
const boundGreet = greet.bind(person);
boundGreet();


//call() method
const person = {
    name: 'PRESIDIO',
    greet: function(city) {
        console.log('Hello, ' + this.name + ' from ' + city);
    }
};
person.greet('Chennai');
const greet = person.greet;
greet.call(person, 'Delhi');


//apply() method
//by passing args as an array while maintaining the this context.
const person = {
    name: 'PRESIDIO',
    greet: function(city, country) {
        console.log('Hello, ' + this.name + ' from ' + city + ' , ' + country);
    }
}
person.greet('Chennai', 'India');
const greet = person.greet;
greet.apply(person, ['delhi', 'chennai']);
*/

//Arrow Functions
const person = {
    name : 'PRESIDIO',
    greet : function() {
        const arrowGreet = () => {
            console.log('Hello, ' + this.name);
        };
        arrowGreet();
    }
};
person.greet();
