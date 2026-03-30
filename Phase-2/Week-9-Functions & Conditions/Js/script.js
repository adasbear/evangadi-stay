// alert("your JS file is connected!!");
//
// Question 1
// ● Define a simple function named myFirst that prints the word "Hello" on the console

function myFirst() {
  // return "hello";
  console.log("hello");
}

myFirst();
// console.log(myFirst());

// Question 2
// ● Define a function called mySecond that takes a parameter and prints the parameter on console

function mySecond(a) {
  console.log(a);
}

mySecond(5);

// Question 3
// ● Define a function called myThird that takes a parameter and prints the parameter on the
// console. But, it uses mySecond function to print the parameter on the console

function myThird(b) {
  mySecond(b);
}

myThird("Printed based on the secondFunction");

// Question 4
// ● Write a function named myFourth that takes an array as a parameter and prints only the first
// value of the array on the console.

// function myFourth (arr){
// 	console.log(arr[0]);
// }

// myFourth(["first", "second", "third"]);

const myFourth = (arr) => {
  if (!Array.isArray(arr)) {
    return "Input must be an Array";
  } else {
    return arr[0];
  }
};

console.log(myFourth(["first", "second", "third"]));

// Question 5
// ● Write a function named myFifth that takes an array with two numbers in it as a parameter and prints the sum of the two numbers on console

// We take an array as input
// We then check if the input is also an array.
// We check if the lenght is 2 or not.
// We finally check if the input is a number it self.
// We then sum the elements of the array and return the final value.

function myFifth(arr) {
  // check is the input is actually an array
  if (!Array.isArray(arr)) {
    return "input must be an Array";
  }
  // Check for the length of the array
  if (arr.length < 2) {
    return "Array too short - need 2 numbers";
  } else if (arr.length > 2) {
    return "Array too long - need 2 numbers";
  } else {
    // Check if input is number
    if (isNaN(arr[0]) || isNaN(arr[1])) {
      return "Both inputs must be numbers!!";
    } else {
      return arr[0] + arr[1];
    }
  }
}

console.log(myFifth([10, 10]));

//Questions from ediabit!!

//Question - 6

// Write a function that takes an integer minutes and converts it to seconds.

// - First we need to accept a number(minute) to convert it to seconds.
// - When we do that we hae to check if the input is not a string.
// - Then we check if the number is integer or not.
// - We also have to check if the number given is not a negative.
// - To calculate we can use the formula: Seconds = minute * 60;
// - Then finally we can return the converted seconds.

function minuteConvertor(minutes) {
  // Check if input is a number
  if (typeof minutes !== "number") {
    return "Please input a number value!";
  }

  // Check if input is an integer
  if (!Number.isInteger(minutes)) {
    return "Please enter an integer value";
  }

  // Check if input is negative
  if (minutes < 0) {
    return "Please enter a positive number";
  }

  // Convert minutes to seconds
  return minutes * 60;
}

console.log(minuteConvertor(2));

//Question 7

//Create a function that takes a number as an argument, increments the number by +1 and returns the result.

// - We only need to accept one number.
// - We have to check if the input is not a string.
// - Then we can simply use ++i to increment the number.

function increaseNumber(number) {
  if (typeof number !== "number") {
    return "pleaes enter a number value!";
  } else {
    let increased = ++number;
    return increased;
  }
}

console.log(increaseNumber(9));

//Question 8
// Write a function that takes the base and height of a triangle and return its area.

// -We have to take a number input, we have to have 2 inputs for the base and for the height!
// -The numbers can not be negative so we also have to check that.
// - We use the formula A = 0.5 * base * height;

function triArea(base, height) {
  //Check if the input is a number and not a string or other format!
  if (typeof base !== "number" || typeof height !== "number") {
    return "Please input a number value";
  }

  //check if the input is not negative
  if (base < 0 || height < 0) {
    return "We need a positive input please";
  } else {
    return 0.5 * base * height;
  }
}

console.log(triArea(10, 10));

// Question 9
// In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:

//     chickens = 2 legs
//     cows = 4 legs
//     pigs = 4 legs

// The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.

// We will take 3 inputs, each input represents the total number of each animal in the order: chickern, cows, and pigs.
// We check if the input is not a string or other value.
// We check if the input is not negaive, becasue total number of animals can not be negative.
// We multiply each total animal with its total number of legs.
// We sum all the number of legs we got.

function animals(chickens, cows, pigs) {
  //Check if the input is a number
  if (
    typeof chickens !== "number" ||
    typeof cows !== "number" ||
    typeof pigs !== "number"
  ) {
    return "Please enter a valid input";
  }
  //Check for positive number
  if (chickens < 0 || cows < 0 || pigs < 0) {
    return "We need a positive input please";
  } else {
    let totalChickens = 2 * chickens;
    let totalCows = 4 * cows;
    let totalPigs = 4 * pigs;

    return totalChickens + totalPigs + totalCows;
  }
}

console.log(animals(5, 2, 8));

// Question 10

// Create a function that takes an array containing only TWO numbers as a parameter and returns
// a value that is 3 times the first element of the array.

// We take array as an input.
// We check if the input is an Array first.
// We check the length of teh array to be only two.
// We check if the elements of the array are numbers?
// Then we can simply take the first index of the array and multiply it by 3 and return the value.

function arrayProduct(arr) {
  // Chyeck if the input is an array
  if (!Array.isArray(arr)) {
    return "Please the input must be an array!";
  }
  // Check the length of the array
  if (arr.length < 2) {
    return "too short - we need two numbers";
  } else if (arr.length > 2) {
    return "too long - we need only two numbers";
  } else {
    // Check if the elements of te array are numbers.
    if (typeof arr[0] !== "number" || typeof arr[1] !== "number") {
      return "Please enter a number";
    } else {
      return arr[0] * 3;
    }
  }
}

console.log(arrayProduct([5, 6]));

//#################################################################################################
// Questions on Conditional statements and - practice exercise

// Question 11
//Create a function that returns true when num1 is equal to num2; otherwise return false.

// We accept 2 number values.
//we check if the two numbers are equal using the strict equality operator ===
// If they are equal we return true, otherwise we return false.
// we need to check if the inputs are numbers.
// If not we return a message to input number values.
// Then we can use if condition to check the equality.


function isSameNum(num1, num2) {
  // Check if the inputs are numbers
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "please input a number value.";
  } else {
    if (num1 === num2) {
      return true;
    } else {
      return false;
    }
  }
}
console.log(isSameNum(4, 1));

// Question 12
// Create a function that takes an integer and returns true if it's divisible by 100, otherwise return false.

// we take one number as an input.
// We check if the input is a number.
// Then we can use the modulus operator to get the remainder, and if the remainder is 0 then the number is divisible by 100.

function divisible(num) {
  // Check if the input is a number.
  if (typeof num !== "number") {
    return "please input a number value.";
  } else {
    if (num % 100 === 0) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(divisible(11100000));

// Question 13

//Create a function that takes a number as an argument and returns "even" for even numbers and "odd" for odd numbers.

// We take a number as an input
// We check if the input is not a string or other value.
// To check if a number is odd or evem, we just have to divide the number by 2, and we use the modulus operetor to check if the remainder is 0 or not.
// If the remainder is 0 - the number is even, and if the remainder is not 0 - the number is odd.

function isEvenOrOdd(num) {
  if (typeof num !== "number") {
    return "please input a number value.";
  } else {
    if (num % 2 === 0) {
      return "even";
    } else {
      return "odd";
    }
  }
}

console.log(isEvenOrOdd(3));

// Question 14
// ● Create a function that returns
// ○ “Invalid score” if score is above 100 or score is a negative number
// ○ “Grade A” when score is between 90 and 100 (both 90 and 100 included)
// ○ “Grade B” when score is between 80 and 89 (both 80 and 89 included)
// ○ “Grade C” for any score below 79

// We create a function that accepts only one input.
// We need to check if the score is not string.
// We use if condition to check if the score is not negative or above 100. Then Use if statement again to check the score and give a grade.

function grade(score) {
  //Check if the score is a number.
  if (typeof score !== "number") {
    return "Please input a number value.";
  }

  //Check if score is negative or above 100
  if (score < 0 || score > 100) {
    return "Invalid score";
  } else {
    if (score >= 90) {
      return "Grade A";
    } else if (score >= 80) {
      return "Grade B";
    } else {
      return "Grade C";
    }
  }
}

console.log(grade(100));

// Some practice questions

function numberSquares(n) {
  if (n <= 0) {
    return 0;
  } else {
    return n * n + numberSquares(n - 1);
  }
}

console.log(numberSquares(3));

// Recurssive function that takes string and number and repeates the string with the number taken

function repetition(txt, n) {
  // console.log(txt);
  if (n >= 1) {
    return txt + repetition(txt, n - 1);
  } else {
    return "";
  }
}

console.log(repetition("ab", 1));

// A function that calculates factorial of a number.

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else if (n < 0) {
    return "undefined";
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(2));

// A number is given and we are asked to multiply that number with every number between 1 and 10, and then sum all of them.

function multiSum(num, ten = 10) {
  if (ten <= 0) {
    return 0;
  } else {
    return num * ten + multiSum(num, ten - 1);
  }
}

console.log(multiSum(1));
