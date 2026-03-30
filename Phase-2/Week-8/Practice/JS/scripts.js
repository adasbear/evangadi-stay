// // Array Practice

// let firstArray = [10, "Adil", 30];

// console.log(firstArray[2]); // Accessing the third element

// let user;

// // user = window.prompt("Enter your name:");

// console.log(user); // Displaying the user's name

// // The difference between null and undefined
// let a;

// // we get undefined when we declare a variable but do not assign any value to it and try to access it.
// console.log(a); // undefined

// let b = null;
// // null is an assignment value. It can be assigned to a variable as a representation of no value.
// console.log(b); // null

// //AST - Abstract Syntax Tree 

// // let firstname = "Adil";
// // let lastname = "Befikadu";

// // let fullname = `My full name is ${firstname} ${lastname}`;
// // console.log(fullname);

// If Statement Practice

if (1 == 1){
    console.log("This is true");
}


let score = 85;
let pass = 50;

if (score >= pass){
    console.log("You have passed the exam!");
}

if (score < pass){
    console.log("You have failed the exam.");
}

// If-Else Statement Practice

let age = 20;

if (age >= 18){
    console.log("You are eligible to vote.");
} else{
    console.log("You are not eligible to vote.");
}

// Ternary operator If else alternative

let marks = 75;

let result = (marks >= 50)
    ? "You have passed the exam."
    : "You have failed the exam.";

console.log(result);


