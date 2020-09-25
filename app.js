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

