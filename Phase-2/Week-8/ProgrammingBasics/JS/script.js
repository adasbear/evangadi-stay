// alert("your JS file is connected!!");

// Section 1

console.log(24 > 3); //True

console.log(2 < "12"); //True

console.log(0 == 2); //False

console.log(2.0 === 2); //True

console.log(2.0 == "2"); //True

console.log(2 < "John"); //False , Because "John" is NaN

console.log(2 > "John"); //False , Because "John" is NaN

console.log("2" < "2"); //False

console.log("2" > "12"); //True

console.log(1 == 1 || 3 == 2 || 3 == 7); //True

console.log(1 == 1 && 2 == 2 && 3 == 7); //False

console.log(1 == 1 || 2 == 2 && 3 == 7); //True 

console.log(1 == true && 0 > true || "31" > "9" || 10 > 5 || !("2" == "two" || 1 == "1"));  //True

// Section 2

//Question-1
//Question-2
let bb = (1 == true); //the value of true is 1
console.log(bb); //True

//Question-3
let x = 10;
let y = (x > 5) && (x < 15)
console.log(y); //True

//Question-4
let aa = 5;
aa += 3; // This is equivalent to a = a + 3
console.log(aa);

//Question-5
let d = 10;
let e = d++; //before incrementing e gets the origional value of d, so it will be 10
console.log(e);

// Question-6
let f = 1;
let g = (x !== 2); //This operator works to check either if it is equal in value or equal in type
console.log(g);

// Question-7
console.log(+"2"+2);

// Question-8
console.log(7 % 3);

// Question-9
console.log(2 + true);

// Section-3

let a = 1;
let b = 2;
let c = a + b;

console.log(c);

// Section-4

let fName = "Adil";
let lName = "Befikadu";
let full_name = fName + " " + lName;

console.log(full_name);


// let result = 5+"10";
// console.log(result);