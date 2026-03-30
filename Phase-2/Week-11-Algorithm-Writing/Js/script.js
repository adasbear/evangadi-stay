console.clear();

// ============================================================
// QUESTION 1
// ============================================================
console.log("=============Question-1================");
// ============================================================
// Given an array of numbers, write a function that prints in 
// the console another array which contains all the even numbers 
// in the original array, which also have even indexes only.
//
// Test Cases:
// ○ Test 1: getOnlyEvens([1, 2, 3, 6, 4, 8]) prints [4]
// ○ Test 2: getOnlyEvens([0, 1, 2, 3, 4]) prints [0, 2, 4]
// ============================================================
// PSEUDO CODE:
// 1. Check if input is an array, if not return error
// 2. Check if array is empty, if yes return empty array
// 3. Create an empty array to store results
// 4. Loop through each element in the array
// 5. Check if each element is a number, if not return error
// 6. Check if index is even AND value is even
// 7. If both conditions are true, add element to result array
// 8. Return the result array
// ============================================================

let arr = [0, 1, 2, 3, 4];

const getOnlyEvens = (arr) => {
  // Validation: Check if input is an array
  if (!Array.isArray(arr)) {
    return "Error: Input must be array!!";
  }

  // Validation: Check if array is empty
  if (arr.length === 0) {
    return [];
  }

  let newArr = [];

  // Loop through each element using index
  for (let i = 0; i < arr.length; i++) {
    // Validation: Check if current element is a number
    if (typeof arr[i] !== "number") {
      return "Error: Array elements must be number only!!";
    }

    // Check two conditions:
    if (i % 2 === 0 && arr[i] % 2 === 0) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
};

console.log(getOnlyEvens(arr));


// ============================================================
// QUESTION 2
// ============================================================
console.log("=============Question-2================");
// ============================================================
// Create a function that takes a two-digit number as a parameter 
// and prints "Ok" in the console if the given number is greater 
// than its reversed digit version. If not, the function will 
// print "Not ok".
//
// Test Cases:
// ○ Test 1: reverseCompare(72) prints "Ok" because 72 > 27
// ○ Test 2: reverseCompare(23) prints "Not ok" because 23 < 32


// ============================================================
// PSEUDO CODE:
// 1. Check if input is a number, if not return error
// 2. Check if input is not NaN, if NaN return error
// 3. Check if number is negative, if yes return error
// 4. Check if number has exactly 2 digits, if not return error
// 5. Convert number to string to work with digits
// 6. Split string into array of characters
// 7. Reverse the array
// 8. Join array back into string
// 9. Convert reversed string back to number
// 10. Compare original number with reversed number
// 11. If original > reversed, return "Ok"
// 12. Otherwise return "Not ok"
// ============================================================

const reverseCompare = (num) => {
  // Validation: Check if input is a number type
  if (typeof num !== "number") return "Error: number value required";

  // Validation: Check if number is negative
  if (num < 0) return "Error: positive numbers only";

  // Validation: Check if number has exactly 2 digits
  if (num.toString().length !== 2) {
    return "Error: only 2 digit numbers are allowed!";
  }

  // Reverse the number:
  let reverseNum = Number(num.toString().split("").reverse().join(""));

  if (num > reverseNum) {
    return 'Ok';
  } else {
    return 'Not ok';
  }
};

console.log(reverseCompare(32));


// ============================================================
// QUESTION 3
// ============================================================

console.log("=============Question-3================");


// ============================================================
// Write a function that takes a positive integer and returns 
// the factorial of the number.
//
// Notes: 
// - The factorial of 0 is 1
// - The factorial of any positive integer x is: 
//   x * (x - 1) * (x - 2) * ... * 1
// - Example: factorial of 4 is 4 * 3 * 2 * 1 = 24
//
// Test Cases:
// ○ Test 1: returnFactorial(5) outputs 120
// ○ Test 2: returnFactorial(6) outputs 720
// ○ Test 3: returnFactorial(0) outputs 1
// ============================================================
// PSEUDO CODE (Recursion):
// 1. Check if input is a number, if not return error
// 3. Check if input is an integer, if not return error
// 4. Check if number is negative, if yes return "Undefined"
// 5. Base Case: If number is 0 or 1, return 1
// 6. Recursive Case: Return number * factorial(number - 1)
// 7. The function keeps calling itself until it reaches base case
// ============================================================

const returnFactorial = (num) => {
  // Validation: Check if input is a number type
  if (typeof num !== "number") return "Error: number value required";

  // Validation: Check if number is an integer (not decimal)
  if (!Number.isInteger(num)) return "Error: integer value required";

  // Validation: Factorial of negative numbers is undefined
  if (num < 0) return "Undefined";

  // Base Case: Factorial of 0 or 1 is always 1
  // This stops the recursion!
  if (num === 0 || num === 1) return 1;

  // Recursive Case:
  return num * returnFactorial(num - 1);
  // 5 * 4* 3 * 2 * 1 * 1
  // 5* fact(4)
  // 4* fact(3)
  // 3* fact (2)
  // 2* fact(1)
  // 1*fact(0)=1
};

console.log(returnFactorial(5));


// ============================================================
// QUESTION 4
// ============================================================

console.log("=============Question-4================");

// ============================================================
// A Meera array is defined to be an array containing only numbers 
// as its elements and for all n values in the array, the value 
// n*2 is not in the array.
//
// Examples:
// - [3, 5, -2] IS a Meera array because 3*2, 5*2, or (-2)*2 
//   are not in the array
// - [8, 3, 4] is NOT a Meera array because 4*2=8 and both 
//   4 and 8 are elements found in the array
//
// Write a function that takes an array of numbered elements and 
// prints "I am a Meera array" in the console if its array does 
// NOT contain n and also n*2 as value. Otherwise, the function 
// prints "I am NOT a Meera array".
//
// Test Cases:
// ○ Test 1: checkMeera([10, 4, 0, 5]) outputs "I am NOT a Meera 
//   array" because 5 * 2 is 10
// ○ Test 2: checkMeera([7, 4, 9]) outputs "I am a Meera array"
// ○ Test 3: checkMeera([1, -6, 4, -3]) outputs "I am NOT a Meera 
//   array" because -3 * 2 is -6
// ============================================================
// PSEUDO CODE:
// 1. Check if input is an array, if not return error
// 2. Check if array is empty, if yes return error
// 3. Check if all elements are numbers, if not return error
// 4. For each number in the array:
//    - Check if its double (n * 2) exists in the array
//    - If yes, it's NOT a Meera array
// 5. If no doubles found, it IS a Meera array
// ============================================================

let arr2 = [7, 4, 9];

const checkMeera = (arr) => {
  // Validation: Check if input is an array
  if (!Array.isArray(arr)) return "Error: Array required";

  // Validation: Check if array is empty
  if (arr.length === 0) return "Error: Array cannot be empty";

  // Validation: Check if all elements are numbers using .every()
  if (!arr.every((item) => typeof item === "number")) {
    return "Error: Array must contain only numbers";
  }

  // Nested loop approach:
  // Outer loop: Go through each element
  for (let i = 0; i < arr.length; i++) {
    // Inner loop: Compare with every other element
    for (let n = 0; n < arr.length; n++) {
      // Check if any element's double equals current element
      if (arr[n] * 2 === arr[i]) {
        return "I am NOT a Meera array";
      }
    }
  }

  return "I am a Meera array";
};

console.log(checkMeera(arr2));


// ============================================================
// QUESTION 4 - ALTERNATIVE METHOD
// ============================================================
// Alternative Method using .includes()
// ============================================================

const meeraCheck = (arr) => {
  // Loop through each element
  for (let i = 0; i < arr.length; i++) {
    let n = arr[i];

    if (arr.includes(n * 2)) {
      return "I am NOT a Meera array";
    }
  }

  return "I am a Meera array";
};

console.log(meeraCheck(arr2));


// ============================================================
// QUESTION 5
// ============================================================

console.log("=============Question-5================");

// ============================================================
// Define a Dual array to be an array where every value occurs 
// exactly twice.
//
// Examples:
// - {1, 2, 1, 3, 3, 2} IS a Dual array (each number appears twice)
// - {2, 5, 2, 5, 5} is NOT a Dual array (5 occurs three times 
//   instead of two times)
// - {3, 1, 1, 2, 2} is NOT a Dual array (3 occurs once instead 
//   of two times)
//
// Write a function named isDual that returns 1 if its array 
// argument is a Dual array. Otherwise it returns 0.
//
// Test Cases:
// ○ Test 1: isDual([1, 2, 1, 3, 3, 2]) returns 1
// ○ Test 2: isDual([2, 5, 2, 5, 5]) returns 0
// ○ Test 3: isDual([3, 1, 1, 2, 2]) returns 0
// ============================================================
// PSEUDO CODE:
// 1. Check if input is an array, if not return error
// 2. Check if array is empty, if yes return 0
// 3. Check if array has odd length, if yes return 0
// 4. Check if all elements are numbers, if not return error
// 5. Create an empty object to count occurrences
// 6. Loop through the array:
//    - If number exists in count object, increment it
//    - If number doesn't exist, set it to 1
// 7. After counting, check each count:
//    - If ANY count is not equal to 2, return 0
// 8. If ALL counts equal 2, return 1
// ============================================================

let arr3 = [2, 5, 2, 5];

const isDual = (arr) => {
  // Validation: Check if input is an array
  if (!Array.isArray(arr)) return "Error: Array required";

  // Validation: Check if array is empty
  // Empty array cannot be dual (no pairs)
  if (arr.length === 0) return 0;

  // Validation: Check if array has odd length
  // Odd length can never be dual (can't have all pairs)
  if (arr.length % 2 !== 0) return 0;

  // Validation: Check if all elements are numbers
  if (!arr.every((item) => typeof item === "number")) {
    return "Error: Array must contain only numbers";
  }

  // Create empty object to store count of each number
  let count = {};

  // Loop through array using for...of
  for (let num of arr) {
    // Check if number already exists in count object
    if (count[num]) {
      // Number exists, increment count by 1
      count[num]++;
    } else {
      // Number doesn't exist, start count at 1
      count[num] = 1;
    }
  }

  // Now check if ALL counts equal 2
  for (let key in count) {
    if (count[key] !== 2) {
      return 0;
    }
  }

  return 1;
};

console.log(isDual(arr3));

//Question - 6
console.log("=============Question-6================");
// ============================================================
// Write a function that takes the number of seconds and returns 
// the digital format clock time as a string. Time should be 
// counted from 00:00:00.
//
// Test Cases:
// ○ digitalClock(5025) → "01:23:45" 
//   (5025 seconds = 1 hour, 23 mins, 45 secs)
// ○ digitalClock(61201) → "17:00:01" 
//   (No AM/PM, 24h format)
// ○ digitalClock(87000) → "00:10:00" 
//   (It's 00:10 next day - wraps at 24 hours)
// ============================================================

// ============================================================
// PSEUDO CODE:
// 1. Calculate total hours by dividing seconds by 3600
// 2. Use modulo (%) 24 to handle overflow (reset at 24 hours)
// 3. Calculate remaining seconds after removing hours
// 4. Calculate minutes by dividing remaining by 60
// 5. Calculate final seconds using modulo 60
// 6. Format each value to 2 digits (add leading zero if needed)
// 7. Return formatted string HH:MM:SS
// ============================================================


const digitalClock = second => {
  let hour = Math.floor(second / 3600)%24;
  
  let remainAfterHour = second % 3600;
  
  let minute = Math.floor(remainAfterHour / 60);
  
  let seconds = remainAfterHour % 60;
  
  let formattedHour = hour.toString().padStart(2, "0");
  let formattedMinute = minute.toString().padStart(2, "0");
  let formattedSecond = seconds.toString().padStart(2, "0");

  
  return`${formattedHour}:${formattedMinute}:${formattedSecond}`;
  // console.log(`Here is the hour ${hour} and here is the minute ${minute}`);
}

console.log(digitalClock(61201));










