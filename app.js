var tva = 12;

console.log(tva);

tva = 22;

console.log(tva);

var firstName;
console.log(firstName);
firstName = "John";
console.log(firstName);

const lastName = "Smith";

console.log(lastName);
//REASSIGNMENT DOES NOT WORK WHIT CONST
// lastName = "Doe";
// console.log(lastName);
// const fullName = "John Smith";

let age = 21;
console.log(age);
age = 23;
console.log(age);

//var firstName = "soemthing else";

const iAmTrue  = true;
const iAmFalse = false;

console.log(iAmTrue && iAmFalse); //false
console.log(iAmTrue && iAmTrue); //true
console.log(iAmFalse && iAmFalse); //false

console.log(iAmTrue || iAmFalse); //true
console.log(iAmTrue || iAmTrue); //true
console.log(iAmFalse || iAmFalse); //false

console.log((iAmTrue || iAmFalse) && iAmTrue); //true
console.log("Hello" + " From" + " JavaScript " + firstName);
let nullVariable = null;
console.log(nullVariable);


const students = ["Dan", "Cosmin", "Andre", "Elena", "Fabian"];
const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21];

console.log(students[0]);
console.log(students[3]);

console.log(students[10]);

students[0] = "Iulia";
console.log(students[0]);

const myArray = [
    "I am string", 
    21, 
    false, 
    null, 
    [1, 2, 3]
];

console.log(myArray[4][0]);

const student = {
    firstName: "Ion",
    lastName: "Popescu",
    studyYear: 4,
    dateOfBirth: "1980/04/29",
    classes: ["Programming", "Data Structures", "Algorithms"],
    age: 42,
};

console.log(student.firstName);
console.log(student.lastName);
console.log(student.studyYear);
console.log(student.dateOfBirth);
console.log(student.classes);

const listOfStudents = [
    {
        firstName: "Ion",
        lastName: "Popescu",
    
    },
    
    {
        firstName: "George",
        lastName: "Popescu",
    },
    {
        firstName: "Traian",
        lastName: "Stanciu",
        classes: ["Programming"],
        grades:{
            programing: 10,
        },
    },
];

console.log(listOfStudents[1].lastName);
console.log(listOfStudents[2].firstName);
console.log(listOfStudents[2].classes[0]);
console.log(listOfStudents[2].grades.programing);

console.log("Fullname: " + student.firstName + " " + student.lastName);
console.log("Student age is: " + student.age);

var x = 10;
var x = 20;

let y = 10;
//let y = 20; // not possible!

let z; //undefined at this point
z = 10;

const foo = 10;
//foo = 20; //will cause an error

const myObject = {
    a: 10,
    b: 20,
};

//myObject = 0; // will cause an error!
myObject.a = 0;
myObject.c = 30;

console.log(myObject);
