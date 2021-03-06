// const surojit ={
//     name: "Surojit",
//     age: 30
// }

// console.log(surojit)
// console.log(surojit.age)

//Constructor

//Person Constructor

// function Person(name, dob){
//     this.name = name; //This refferes to Person function
//     this.birthday = new Date(dob);
//     this.calculateAge = function(){
//         const diff = Date.now() - this.birthday.getTime();
//         const ageDate = new Date(diff);
//         return Math.abs(ageDate.getUTCFullYear()- 1970)
//     }
// }


// console.log(this)// this reeffers to window object.

// const surojit = new Person('Surojit',25);
// const john = new Person('John',30);

// console.log(surojit.age);

// const surojit = new Person('Surojit', '08-11-1995');

// console.log(surojit);
// console.log(surojit.calculateAge());

//Other constructors

//String constructor

// const name1 = "surojit";
// const name2 = new String('Surojit');

// //name2.foo = "Manna";
// console.log(name1);
// console.log(name2);
// console.log(typeof name1);
// console.log(typeof name2);

//Number Constructor

// const num1 = 5;
// const num2 = new Number(5);

// console.log(num1);
// console.log(typeof num2);

//Boolean Construcctor

// const boo1 = true;
// const boo2 = new Boolean(false)

// console.log(boo1);
// console.log(boo2);

//Function

// const getSum1 = function(x, y){
//     return x + y;
// }

// const getSum2 = new Function('x','y','return x+y')

// console.log(getSum1(5, 6));
// console.log(getSum2(5, 6));

//Object

// const obj1 = {
//     firstName: 'Surojit',
//     lastName: 'Manna'
// }

// const obj2 = new Object({
//     firstName: 'Surojit',
//     lastName: 'Manna'
// });
// console.log(obj1);
// console.log(obj2);

//Arrays

// const arr1 = [1,2,3,4,5,6,7,8,9,0];
// const arr2 = new Array(1,2,3,4,5,6,7,8,9,0)

// console.log(arr1);
// console.log(arr2);

//Regular Expression

// const re1 = /\w+/;
// const re2 = new RegExp('\\w+');

// console.log(re1);
// console.log(re2);

//Prototype

// function Person(firstName, lastName, dob){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.birthday = new Date(dob);
//     // this.claculateAge = function(){
//     //     const diff = Date.now()-this.birthday.getTime();
//     //     const ageDate = new Date(diff);
//     //     return Math.abs(ageDate.getUTCFullYear()- 1970);
//     // }
// }

// //Calculate Age Function in Prototype
// Person.prototype.claculateAge = function(){
//     const diff = Date.now()-this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear()- 1970);
// }
// //Get Full Name Function In Prototype
// Person.prototype.fullName = function(){
//     return `${this.firstName} ${this.lastName}`;
// }
// //Get Married Function In prototype
// Person.prototype.getMarried = function(newLastName){
//    this.lastName= newLastName;
// }

// const martha = new Person('Martha','Neilsen','12-9-1986');
// const jonas = new Person('Jonas','Kahnwald','7-27-1986');

// // console.log(john.claculateAge());
// // // console.log(john.firstName);
// // console.log(jonas.claculateAge());
// // console.log(jonas.fullName());

// //Assigning get married function
// martha.getMarried('Kahnwald');

// // console.log(martha.fullName());

// // console.log(jonas.hasOwnProperty('firstName'));

// function Person(firstName, lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// //greetings function
// Person.prototype.greetings = function(){
//     return `Hello! There ${this.firstName} ${this.lastName}.`;
// }

// const user1 = new Person('Jonas', 'Kahnwald');

// console.log(user1.greetings());

// //Coustomer Constructor

// function Coustomer (fName, lName, phone, membership){
//     Person.call(this, fName, lName);
//     this.phone = phone;
//     this.membership = membership;
// }
// //Inherit the person prototype methods
// Coustomer.prototype = Object.create(Person.prototype)
// Coustomer.prototype.constructor = Coustomer;

// //Change Coustomer Greetings
// Coustomer.prototype.greetings = function(){
//     return `Hello There ${this.firstName} ${this.lastName}. We are glad to have you.`
// }

// const coustomer1 = new Coustomer('Agnes','Neilsen','9800765686','Standered');

// console.log(coustomer1);

// console.log(coustomer1.greetings());

//create.object

// const personPrototype ={
//     greetings: function(){
//         return `Hi there ${this.firstName} ${this.lastName}.`;
//     },
//     getMarried: function(newLastName){
//         this.lastName = newLastName;
//     } 
// }

// const user1 = Object.create(personPrototype);

// user1.firstName = 'Martha';
// user1.lastName = 'Neilsen';
// user1.age = 28;
// user1.getMarried('Kahdwal')

// console.log(user1.greetings());

// //another method
// const user2 = Object.create(personPrototype, {
//     firstName: {value: 'Agnes'},
//     lastName: {value: 'Nielsen'},
//     age: {value: 30}
// });

// console.log(user2);

// user2.getMarried('Tauber');

// console.log(user2);

//Es6 Classes

// class Person {
//     constructor(firstName, lastName, dob){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.birthday = new Date(dob);
//     }

//     greeting(){
//         return `Hello There! ${this.firstName} ${this.lastName}`
//     }

//     calculateAge(){
//         const diff = Date.now() - this.birthday.getTime();
//         const getDate = new Date(diff);
//         return (Math.abs(getDate.getUTCFullYear() -1970)); 
//         }
    
//     getMarried(newLastName){
//         this.lastName = newLastName;
//     }

//     static addNumbers(x, y){
//         return x+y;
//     }
// }

// const jonas = new Person('Jonas','Kahndwal','7-27-1984');
// const martha = new Person('Martha', 'Neilsen', '12-7-1984');
// martha.getMarried('Kahndwal');

// // console.log(jonas.greeting());
// console.log(jonas.calculateAge());
// console.log(jonas);

// console.log(martha.greeting());

// console.log(Person.addNumbers(455,678));

//Es6 sub calss

class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greetings(){
        return `Hi there ${this.firstName} ${this.lastName}`
    }
}

class Coustomer extends Person{
    constructor(firstName, lastName, phoneNumber, membership){
        super(firstName, lastName);
        this.phoneNumber = phoneNumber;
        this.membership = membership;
    }

    static getMembershipCost(){
        return 500;
    }
}

const jonas = new Coustomer('Jonas','Kahndwal','1234567890','premium');

console.log(jonas.greetings());
console.log(Coustomer.getMembershipCost());
