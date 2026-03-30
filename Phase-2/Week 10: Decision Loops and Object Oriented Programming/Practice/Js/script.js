// //This code helps our terminal not to stack outputs.
console.clear();

// // For Loop
// for (i = 1; i <= 9; i = i + 1){
//   console.log("hello");
// }

// // Applying it on Arrays

// let stuGrade = [12, 89, 90, 78, 5, 100];
// let pass = 50;

// for (i = 0; i <= stuGrade.length; i++){
//   console.log(stuGrade[i]);
// }

// // Printing the number 7 only from a collection of numbers inside an array
// let num = [2, 7, 6, 7, 8, 7, 9];

// for (i = 0; i <= num.length; i++){
//   if (num[i] === 7) {
//     console.log(num[i]);
//   }
// }

// // While Loop
// // 
// let a = 0;

// while (a < 6) {
//   console.log("While-Example");
//   a++
// }


// Question
// Create a function that takes a number.
// Then we add all numbers starting from 1 to the number we passed.
// e.g: if the number is 4 then we add 1 + 2 + 3 + 4 = 10;


function sum(num) {
  let total = 0
  for (i = 1; i <= num; i++){
    total += i;
  }
  return total;
}

console.log(sum(4));
console.log(sum(13));
console.log(sum(600));

let createarr = [1, 2, 3, 4, 5];
console.log(createarr);
// When we create an array we just give the values, and the key [index] is given automatically.
// But when it comes to an object we are the ones who are supposed to give the key and also the value.

// Practice of JS Object

//We can create object as follows:
let createOb = {
  m1: 1,
  m2: 2,
  m3: 3,
  m4: 4,
  m5: 5,
}; 
console.log(createOb);
// we can also log out specific item from the object we created;
console.log(createOb["m1"]);


console.log("====================Method================")

let Adil = {
  firstName: "Adil",
  lastName: "Befikadu",
  
  eat: function () {
    console.log("Adil Beso Bela");
    return "Kiyad beso bela";
  },
};

console.log(Adil);
console.log(Adil.lastName);
console.log(Adil.eat());
Adil.eat();

// Object Constructor
console.log("=============Object Constructor=============");

// In simple terms: Constructor funciton is a way of creating a prototype for an object!!
function Person(fn, ln) {
  this.firstName = fn;
  this.lastName = ln;
  
  this.fullName = function () {
    // return this.firstName + " " + this.lastName;
    return `${this.firstName} ${this.lastName}`;
  }
}

// here we are creating a new object
let Kiyad = new Person("Kiyad", "Befikadu");

console.log(Kiyad.fullName());
// Kiyad.fullName();
console.log("=============Built in String Object============="); 

let example = "name";

// console.log(example.charAt(0));
let example2 = [];
for (let i = 0; i < example.length; i++){
  example2 += example.charAt(i); 
  console.log(example2);
  
}

console.log(example2[2]);

let fox = "the quick brown fox jumps over the lazy dog.";

console.log(fox.slice(0, 10))


console.log("=============JS constructor function from YouTube============="); 
// The job of this function is to construct an array, or create a blue print for an array!!
// The convention we use for namin constructor fnction is using Pascal Case, where the first letter of every word is capital letterf.
// 

console.log("------------------AI Practice questions")

function isPrime(num) {
  if (typeof num !== "number") {
    return "Error: NUmber Value Required";
  }
  if (!Number.isInteger(num)) {
    return "Error: We need an Integer value!"
  }
  
  if (num <= 1) {
    console.log(0);
    return;
  }
  
  for (let i = 2; i < num; i++){
    if (num % i === 0) {
      console.log(0);
      return;
    }
  }
  console.log(1);
}

isPrime(1);

console.log("------------new things----------");

let numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (num) {
  console.log(num)
})

let newArr = numbers.map(function (num) {
  return num;
})

console.log(newArr);

let even = numbers.filter(function (num) {
  return num % 2 === 0;
});

console.log(even);

console.log("=========Intermediate Question===========")

function arrayStats(arr) {
  if (!Array.isArray(arr)) {
    return "Error: Please enter an array value;"
  }
  
  if (arr.length === 0) {
    return "Error: Array cannot be empty";
  }
  
  for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] !== 'number') {
        return "Error: All elements must be numbers";
      }
    }
    
  let sum = arr.reduce(function (total, num) {
    return total + num;
  }, 0);
  
  let myObject = {
    sum: sum,
    average: sum / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    evens: arr.filter(function (num) {
      return num % 2 === 0;
    }),
    odds: arr.filter(function (num) {
      return num % 2 !== 0;
    })
  }
  return myObject;
}

console.log(arrayStats([2, 5, 8, 1, 9, 3, 6]));

console.log("===============Palindrome===============")

function palindromeInfo(word) {
  if (typeof word !== 'string') {
    return "Error: Only string allowed";
  }
  
  if (word.length === 0) {
    return "Error: input cannot be empty!";
  }
  
  if (word.length === 1) {
    return {
          original: word,
          cleaned: word.toLowerCase(),
          reversed: word.toLowerCase(),
          isPalindrome: true,
          length: 1
        };
  }
  
  let clean = word.toLowerCase().replaceAll(" ", "");
  let reverse = clean.split("").reverse().join("");
  let palindrome = true;
  
  if (clean !== reverse) {
    palindrome = false;
  }
  
  let myObject = {
    original: word,
    clean: clean,
    reverse: reverse,
    isPalindrome: palindrome,
    length: clean.length
  }
  
  return myObject;
}

console.log(palindromeInfo("A"));

// What is the difference between method and function? <- Question from Redi'et.