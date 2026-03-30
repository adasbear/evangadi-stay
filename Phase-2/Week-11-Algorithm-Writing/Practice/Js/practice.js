console.clear();

// This questions is taken from Adugna's first video!!ff!
function detectWord(word) {
  let finalWord = "";
  for (let i = 0; i < word.length; i++){
    char = word[i];
    if (char === char.toLowerCase() && char !== char.toUpperCase()) {
      finalWord += char;
    }
  }
  return finalWord;
}

console.log(detectWord("UPPPaDDDdOULiLLNFl"));

// Question - 2;  
// 
// Nesting one array inside another one: this means one array is the element of another array or the second one.
// Create a function that returns true if the first array can be nested inside the second. arr1 can be nested inside arr2 if: arr1's min is greater than arr2's min. arr1's max is less than arr2's max
let arr1 = [1, 2, 3, 4];
let arr2 = [0, 6];

function canNest(arr1, arr2) {
  let min1 = Math.min(...arr1);
  let min2 = Math.min(...arr2);
  
  let max1 = Math.max(...arr1);
  let max2 = Math.max(...arr2);
  
  return min1 > min2 && max1 < max2;
}

console.log(canNest(arr1, arr2));
// we can also use the sort() method, it sorts the elements of the array in increasing order so the min vlaue will be arr[0] and the max  number will be arr[arr.length - 1].f
// 
// 
// 
// 
// 
// Methods | Functions inside an object
// a function defined inside an object is called method.
// basically methods, are properties of an object that hold a fucntion value.
// to define a method we can do like this:

// 1. The traditional syntax
const person = {
  name: "Alex",
  greet: function () {
    return "Hello, everyone!"
  }
}
console.log(person.greet());

// 2. The shorthand modern way
const person2 = {
  name: "Jhon",
  greet() {
    return "Hello, people!"
  }
}
console.log(person2.greet());

// We can also use the keyword *this* inside a method to reuse the object's properties.
// *this* refers to the object that owns the mehtod.
// This way we can easily access and manipulate the object's properties.
// 
const calc = {
  a: 5,
  b: 6,
  add() {
    return `The sum is ${this.a + this.b}`;
  }
}

console.log(calc.add());

// We can also create one function and use it as a method for multiple objects. for e.g

function introduce() {
  console.log(`Hello, I am ${this.name}`)
}

const person1 = { name: "Abe", introduce };
const person3 = { name: "Kebe", introduce };

person1.introduce();
person3.introduce();

// Constructor function
// This is basically creating a new object, we create a prototype and based on it we can simply create new objects.
function Person4(name, age) {
  this.name = name;
  this.age = age;
}

const per1 = new Person4("Adil", 19);
const per2 = new Person4("Kiyad", 16);

console.log(per1.name)


console.log("===========================")

function twoSum(nums, target){
    let result = []
    for (i = 0; i < nums.length; i++){
        for (j = i+1; j < nums.length; j++){
            if (nums[i] + nums[j] === target){
                result.push(i, j)
            }
        }
    }
    return result;
}

console.log(twoSum([1, 2, 3], 3))

console.log("===========================")

let addTwoNumbers = function (l1, l2) {
  let newL1 = "";
  let newL2 = "";
  let sum;
  let final;
  let l3 = [];
  for (let num of l1) {
    newL1 += num;
    finalL1 = Number(newL1.split('').reverse().join(''));
  }
  for (let num of l2) {
    newL2 += num;
    finalL2 = Number(newL2.split('').reverse().join(''));
  }
  
  sum = finalL1 + finalL2;
  final = String(sum).split('').reverse().join('');
  l3 = final.split('').map(Number);
  console.log(l3)
  
}

addTwoNumbers([2, 4, 3], [5, 6, 4]);