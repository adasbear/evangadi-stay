console.clear();

console.log("====================Question-1====================");
// Question 1
// ● Write a function that prints the first 10 integers on the console starting from the number 1 using
// the JavaScript for loop.

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Question-2
console.log("====================Question-2====================");
// Write a function that takes a single number as an argument and prints the next 5 numbers in the
// console. Note: each output should be displayed on a new line.
// ○ Test case: If you give 7 to the function, output should look like this:
// 8
// 9
// 10
// 11
// 12
//
// 1. Create a function that takes a number as input
// 2. Check if the input is a number
// 3. If not a number, show error and stop
// 4. Use for loop starting from 1 to 5
// 5. Print num + i each time (this gives us next 5 numbers)

function nextNum(num) {
  // Check if input is a number
  if (typeof num !== "number") {
    console.log("Error: Please input a number!!");
    return;
  }

  // Loop 5 times, adding i to num gives next numbers
  for (let i = 1; i <= 5; i++) {
    console.log(num + i);
  }
}

nextNum(0);

// Question - 3
console.log("====================Question-3====================");
// ● Write a function that takes a single number and prints the sum of the next 10 numbers after the given number.
// ○ Test case: If you give 7 to the function, output should be: 125 - because (8 + 9 + 10 + 11 + 12 + 13 + 14 + 15 + 16 + 17 = 125)
//
// 1. Create a function that takes a number as input
// 2. Check if the input is a number
// 3. Create a variable 'total' with value 0
// 4. Use for loop from 1 to 10
// 5. Add (num + i) to total each time
// 6. Return the total

function nextSum(num) {
  // Check if input is a number
  if (typeof num !== "number") {
    return "Error: Number Value is Required!!";
  }

  // Initialize total to store sum
  let total = 0;

  // Loop 10 times, add next numbers to total
  for (let i = 1; i <= 10; i++) {
    total = total + num + i;
  }

  return total;
}

console.log(nextSum(7));

// Question - 4
console.log("====================Question-4====================");
// Write a function that takes an array as an argument and prints every element of the array on the console.
// ○ Test case: given the array a = [1, "Hello", 8, 44], output should look like this:
// 1
// Hello
// 8
// 44
//
// 1. Create a function that takes an array as input
// 2. Check if the input is an array
// 3. If not, show error and stop
// 4. Check if the array is not empty, if it is empty we return error
// 5. Use for loop to go through each element
// 6. Print each element

function arrayList(arr) {
  // Check if input is an array
  if (!Array.isArray(arr)) {
    console.log("Error: Please Enter an Array!");
    return;
  }
  // Check if the array is not empty
  if (arr.length === 0) {
    console.log("Error: Array cannot be empty!!")
  }

  // Loop through array and print each element
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

arrayList(["adil", 7, 6, 4, "kiyad"]);

// Question - 5
console.log("====================Question-5====================");

// Write a function that takes an array as an argument and prints the total number of elements found in the array.
// Hint: use a property of the Array object to solve this question.
// ○ Test case 1: Given the array a = [1, "Hello", 8, 44], output should be: 4
// ○ Test case 2: Given the array a = ["world", 13], output should be: 2
//
// 1. Create a function that takes an array as input
// 2. Check if the input is an array
// 3. If not, return error message
// 4. Use .length property to get total elements
// 5. Return the length

function arrayLength(arr) {
  // Check if input is an array
  if (!Array.isArray(arr)) {
    return "Error: Please enter Array!";
  }

  // Return the total number of elements
  return arr.length;
}

console.log(arrayLength([2, 3, 4]));

// Question - 6
console.log("====================Question-6====================");
// Write a function that takes an array of numbers as a parameter and logs in the console the sum of all the numbers in the array.
// ○ Test case 1: If you give this array, [5, 6, 99, 8, 76, 4, 68, 44], to the function, output
// should be: 310 because 5 + 6 + 99 + 8 + 76 + 4 + 68 + 44
// ○ Test case 2: If you give this array, [3, 0], to the function, output should be: 3 because 3 + 0
//
// 1. Create a function that takes an array as input
// 2. Check if the input is an array
// 3. Create a variable 'result' with value 0
// 4. Use for loop to go through each element
// 5. Check if each element is a number
// 6. If not a number, return error
// 7. Add each number to result
// 8. Return the total sum

function arraySum(arr) {
  // Check if input is an array
  if (!Array.isArray(arr)) {
    return "Error: Please enter Array!";
  }

  // Initialize result to store sum
  let result = 0;

  // Loop through each element
  for (let i = 0; i < arr.length; i++) {
    // Check if element is a number
    if (typeof arr[i] !== "number") {
      return "Error: Provide number value only!";
    }
    // Add to result
    result += arr[i];
  }

  return result;
}

console.log(arraySum([5, 6, 99, 8, 76, 4, 68, 44]));

// Question 7
console.log("====================Question-7====================");
//
// Write a function that takes an array of all numbers as a parameter, subtracts the total sum of all
// odd numbers of the array from the total sum of all even numbers and logs the result in the console.
// ○ Test case: If you give these array, [5, 6, 99, 8, 76, 4, 68, 44], to the function, output should be: 102
// ■ Sum of odd numbers: 5 + 99 = 104
// ■ Sum of even numbers: 6 + 8 + 76 + 4 + 68 + 44 = 206
// ■ Difference between total even and total odd numbers: 206 - 104 = 102
//
// 1. Create a function that takes an array as input
// 2. Create two variables: totalEven = 0 and totalOdd = 0
// 3. Check if the input is an array
// 4. Use for loop to go through each element
// 5. Check if each element is a number
// 6. Use modulus (%) to check if number is even or odd
// 7. If even (num % 2 === 0), add to totalEven
// 8. If odd (num % 2 !== 0), add to totalOdd
// 9. Return totalEven - totalOdd

function numSubtraction(arr) {
  // Initialize variables for even and odd sums
  let totalEven = 0;
  let totalOdd = 0;

  // Check if input is an array
  if (!Array.isArray(arr)) {
    return "Error: Array Required";
  }
  // Check if the array is not empty
  if (arr.length === 0) {
    console.log("Error: Array cannot be empty!!")
  }

  // Loop through each element
  for (let i = 0; i < arr.length; i++) {
    // Check if element is a number
    if (typeof arr[i] !== "number") {
      return "Error: Number Required";
    }

    // Separate even and odd numbers
    if (arr[i] % 2 === 0) {
      console.log(arr[i])
      totalEven += arr[i]; // Add to even sum
    } else {
      totalOdd += arr[i]; // Add to odd sum
    }
  }

  // Return the difference
  return totalEven - totalOdd;
}

console.log(numSubtraction([5.4, 6, 99, 8, 76, 4, 68, 44]));

// Question - 8
console.log("====================Question-8====================");
//
// Write a function that takes an array as a parameter and logs in the console the elements that have
// even indexes only. Notice: this question is not asking you to log elements with even value, but
// elements that are located on even indexes)
// ○ Test case 1: If you give this array to the function [5, 6, 99, 8, 76, 4, 68, 44], toutput
// should be:
// 5
// 99
// 76
// 68
// ○ Test case 2: If you give this array to the function [11, “Sam”, 3, 7, “car”], output should
// be:
// 11
// 3
// car
//
// 1. Create a function that takes an array as input
// 2. Check if the input is an array
// 3. Use for loop to go through each index
// 4. Check if index is even using modulus (i % 2 === 0)
// 5. If index is even, print the element at that index

function evenIndex(arr) {
  // Check if input is an array
  if (!Array.isArray(arr)) {
    return "Error: Array Required";
  }
  // Check if the array is not empty
  if (arr.length === 0) {
    console.log("Error: Array cannot be empty!!")
  }


  // Loop through array
  for (let i = 0; i < arr.length; i++) {
    // Check if index is even (0, 2, 4, 6...)
    if (i % 2 === 0) {
      console.log(arr[i]);
    }
  }
}

evenIndex([5, 6, 99, 8, 76, 4, 68, 44]);

console.log(
  "-------------------Questions on built in JavaScript methods---------------------",
);

// Questions 9 and 10 are dependent on the sampleArray provided below:
// let sampleArray = [5, 6, 99, 8, 76, 4, 68, 44];
//
// Question 9
console.log("====================Question-9====================");

// Write a function that takes the sampleArray as a parameter, removes the last element from the array,
// adds a new value of "32" to the array and prints the new array on the console. Hint: use an array method
//
// 1. Create a function that takes an array as input
// 2. Check if the input is an array
// 3. Use pop() method to remove last element
// 4. Use push(32) method to add 32 at the end
// 5. Return the modified array

function arrRemove(arr) {
  // Check if input is an array
  if (!Array.isArray(arr)) {
    return "Error: Array Required";
  }

  // Remove last element
  arr.pop();

  // Add 32 at the end
  arr.push(32);

  return arr;
}

console.log(arrRemove([5, 6, 99, 8, 76, 4, 68, 44]));

// Question 10
console.log("====================Question-10====================");

// Write a function that takes the sampleArray as an argument, sorts the array in ascending order
// and prints the sorted array on the console
// // Use the sort method. Make sure you understand just using the sort() method alphabetically.
// You should use this sorting syntax - sort(function(a, b){return a-b});
//
// 1. Create a function that takes an array as input
// 2. Check if the input is an array
// 3. Use for loop to check if all elements are numbers
// 4. If not a number, return error
// 5. Use sort() method with compare function (a, b) => a - b
// 6. This sorts numbers in ascending order (small to big)
// 7. Return the sorted array
// TIP: For descending order, use (a, b) => b - a

function compareArr(arr) {
  // Check if input is an array
  if (!Array.isArray(arr)) {
    return "Error: Array Required";
  }

  // Check if all elements are numbers
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      return "Error: Number value expected";
    }
  }

  // Sort array in ascending order
  // Without compare function, sort() treats numbers as strings!
  arr.sort(function (a, b) {
    return a - b;
  });

  return arr;
}

console.log(compareArr([5, 6, 99, 8, 76, 4, 68, 44]));

// Question 11 to 14 are based on the same object.
//
//
// Question 11
console.log("====================Question-11====================");
//Change the lengthOfCourse property of the object to "5 Month" and print the new object on the console
// Use the dot notation "." to call the property you want to change
//
// 1. Use dot notation to access the property
// 2. Assign new value: objectName.propertyName = newValue
// 3. Print the updated object

let evangadiClass = {
  lengthOfCourse: "1 Month",
  website: "https://www.evangadi.com/",
  isChallenging: false,
  topicsCovered: ["HTML", "CSS", "Media Query", "JavaScript"],
  students: [
    { name: "Abebe", age: 34, sex: "M" },
    { name: "Kebede", age: 44, sex: "M" },
    { name: "Almaz", age: 27, sex: "F" },
    { name: "Challa", age: 22, sex: "M" },
    { name: "Chaltu", age: 19, sex: "F" },
  ],
};

// Change the value using dot notation
evangadiClass.lengthOfCourse = "5 Month";
console.log(evangadiClass);

// Question 12
console.log("====================Question-12====================");
// Add "Bootstrap" at the end of the topicsCovered property and print the new object on the console
// Use an array method
//
// 1. Access the topicsCovered array using dot notation
// 2. Use push() method to add "Bootstrap" at the end
// 3. Print the updated object

// Add Bootstrap to the end of topicsCovered array
evangadiClass.topicsCovered.push("Bootstrap");
console.log(evangadiClass);

// Question 13
console.log("====================Question-13====================");
// Write a function that takes the "evangadiClass" object as an argument and calculates the average
// age of the class. Print the result on the console.
//
// 1. Create a function that takes the object as input
// 2. Create a variable 'total' with value 0
// 3. Use for loop to go through each student
// 4. Add each student's age to total
// 5. Calculate average: total / number of students
// 6. Return the average

function avgAge(classObject) {
  // Initialize total for sum of ages
  let total = 0;

  // Loop through each student
  for (let i = 0; i < classObject.students.length; i++) {
    // Get current student
    let student = classObject.students[i];
    // Add their age to total
    total = total + student.age;
  }

  // Calculate and return average
  let average = Math.round(total / classObject.students.length);
  return average;
}

console.log(avgAge(evangadiClass));

// Question 14
console.log("====================Question-14====================");
// Write a function that takes the "evangadiClass" object as an argument and calculates the
// percentage of male students in the class. Print the result on the console
//
// 1. Create a function that takes the object as input
// 2. Get total number of students
// 3. Create a variable 'result' to count male students
// 4. Use for loop to go through each student
// 5. If student's sex is "M", add 1 to result
// 6. Calculate percentage: (result / total) * 100
// 7. Return the percentage with % symbol

function percent(malePercent) {
  // Get total number of students
  let total = malePercent.students.length;
  // Initialize counter for male students
  let result = 0;

  // Loop through each student
  for (let i = 0; i < total; i++) {
    // Get current student
    let student = malePercent.students[i];

    // Check if student is male
    if (student.sex === "M") {
      result += 1; // Count male students
    }
  }

  // Calculate and return percentage
  let percentResult = (result / total) * 100;
  return `${percentResult}%`;
}

console.log(percent(evangadiClass));

// Puzzles
//
// Question 15
console.log("====================Question-15====================");
// Write a function that takes 2 parameters: a low and high number. Your goal is to print all
// numbers (on the console) between low and high, and for each of these numbers print
// whether or not the number is divisible by 3. If the number is divisible by 3, print the word
// "div3" directly after the number
//
// 1. Create a function that takes two numbers: low and high
// 2. Check if both inputs are numbers
// 3. Check if both inputs are integers (whole numbers)
// 4. Check if low is not greater than high
// 5. Use for loop from low to high
// 6. For each number, check if divisible by 3 (num % 3 === 0)
// 7. If divisible by 3, print number with "div3"
// 8. If not divisible, just print the number

function lowHigh(low, high) {
  // Check if both inputs are numbers
  if (typeof low !== "number" || typeof high !== "number") {
    console.log("Error: Number value is required");
    return;
  }

  // Check if both are whole numbers (integers)
  if (!Number.isInteger(low) || !Number.isInteger(high)) {
    console.log("Error: Both numbers must be integer!");
    return;
  }

  // Check if low is smaller than high
  if (low > high) {
    console.log("Error: Low can not be greater than high");
    return;
  }

  // Loop from low to high
  for (let i = low; i <= high; i++) {
    // Check if divisible by 3
    if (i % 3 === 0) {
      console.log(`${i} div3`); // Print with div3
    } else {
      console.log(i); // Print just the number
    }
  }
}

lowHigh(4, 12);

// Question 16
console.log("====================Question-16====================");

// Write a function that prints in the console the numbers from 1 to 100. But for multiples of
// three print “Fizz” instead of the number and for the multiples of five print “Buzz” and for
// numbers which are multiples of both three and five print "FizzBuzz"
//
// 1. Create a function (no input needed)
// 2. Use for loop from 1 to 100
// 3. Check if number is divisible by BOTH 3 AND 5 first
// 4. If yes, print "FizzBuzz"
// 5. Else if divisible by 3 only, print "Fizz"
// 6. Else if divisible by 5 only, print "Buzz"
// 7. Else just print the number

function fizzBuzz() {
  // Start from 1, not 0
  for (let i = 1; i <= 100; i++) {
    // Check for both 3 AND 5 first
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    }
    // Check for 3 only
    else if (i % 3 === 0) {
      console.log("Fizz");
    }
    // Check for 5 only
    else if (i % 5 === 0) {
      console.log("Buzz");
    }
    // Not divisible by 3 or 5
    else {
      console.log(i);
    }
  }
}

fizzBuzz();

// Question 19
console.log("====================Question-19====================");

// An Evens number is an integer whose digits are all even. For example 2426 is an Evens
// number but 3224 is not. Write a function named isEvens that prints on the console 1 if its
// integer argument is an Evens number. The function prints 0 otherwise.
//
// 1. Create a function that takes a number as input
// 2. Check if input is a number
// 3. Convert the number to a string so we can check each digit
// 4. Convert the string to an array of individual digits
// 5. Create a variable to track if ALL digits are even
// 6. Loop through each digit in the array
// 7. Convert each digit back to a number
// 8. Check if the digit is even (digit % 2 === 0)
// 9. If ANY digit is ODD:
//    - Set our flag to false
// 10. After the loop finishes:
//     - If ALL digits were even, print 1
//     - If ANY digit was odd, print 0
//
function isEvens(num) {
  // Check if input is a number
  if (typeof num !== "number") {
    return "Error: number value is required!";
  }

  // Convert number to string
  let numString = String(num);
  // Convert string to array of digits
  let digits = Array.from(numString);
  // Flag to track if all digits are even
  let allEven = true;

  // Loop through each digit
  for (let i = 0; i < digits.length; i++) {
    let numbers = Number(digits[i]);
    // If we find an odd digit
    if (numbers % 2 !== 0) {
      allEven = false; // Set flag to false
    }
  }

  // Print result based on flag
  if (allEven === false) {
    console.log(0);
  } else {
    console.log(1);
  }
}

isEvens(2024);


console.log("Practice-Question");

let arr = [1, 2, 3, 4, 5];

const sumArr = arr => {
  let sum = 0;
  
  for (let i = 0; i < arr.length; i++){
    let element = arr[i];
    
    if (typeof element === 'number') {
      sum += element;
    }
    
   else if (typeof element === 'string') {
      convert = Number(element);
    } 
  }
}