//  your solutions start here
//  make sure to connect your main.js file with your html
// happy coding 🧑‍💻

// alert('This is working!!');

console.log("==========Question-1==========");

const firstSample = document.getElementById("sample1");

// Print the element!!
console.log(firstSample);

// Print the content of the element
console.log(firstSample.textContent);




console.log("==========Question-2==========");

// Section 2.1
const tech = document.getElementById("techCompanies");
console.log(tech);

// Section 2.2
const techQ = document.querySelector("#techCompanies");
console.log(techQ);

// Section 2.3
const techQ2 = document.querySelectorAll("#techCompanies li");
// console.log(techQ2);
const count = techQ2.length;

console.log(`The number of li elements are ${count}`);

// Section 2.4

const allRed = document.querySelectorAll(".red");
console.log(allRed);
console.log(allRed[0]);

const allRed2 = document.getElementsByClassName("red");
console.log(allRed2);
console.log(allRed2[0]);


// Section 2.5 => Create new element.

const newElement = document.createElement("li");

newElement.textContent = "Facebook";
console.log(newElement);

console.log(newElement.textContent)

// Section 2.6 => Add a new class name for it
newElement.classList.add("blue");

// Section 2.7
tech.appendChild(newElement);


// Section 2.8
const newCount = document.querySelectorAll('#techCompanies .blue');
console.log(newCount.length);



// const counter = () => {

//   let total = 0;
//   for (i = 0; i < count; i++) {
//     if (techQ2[i].className === "blue") {
//       console.log(techQ2[i]);
//       total++;
//       console.log(total)
//     }
//   }
//   return total; //6
// };

let counted = document.createElement('p');
counted.textContent = newCount.length; //7
let blueCmpny = document.getElementById('blueCompanies');
blueCmpny.appendChild(counted);



console.log("==========Question-3==========");

function yesBackground(){
  document.body.style.backgroundColor = '#99ecff';
}

const noBackground = () => {
  document.body.style.backgroundColor = 'red';
}

document.getElementById('yes').addEventListener('click', yesBackground);
document.getElementById('No').addEventListener('click', noBackground);

// const yes = document.getElementById('yes');
// const no = document.getElementById('No');

// yes.addEventListener('click', yesBackground);
// no.addEventListener('click', noBackground);

console.log("==========Question-4==========");

const form = document.getElementById('adder');

form.addEventListener('submit', function(event){
  event.preventDefault;

  const firstV = document.querySelector('input[name = "first-value"]');
  const secondV = document.querySelector('input[name = "second-value"]');
  const sum = document.getElementById('sum');

  num1 = Number(firstV.value);
  num2 = Number(secondV.value);

  console.log(`num1 ${num1} and num2 ${num2}`);

  if(isNaN(num1) || isNaN(num2)){
    sum.textContent = 'Please enter numerical values only';
    console.log('Please enter number value only');
  } else{

    let total = num1 + num2;
    let average = total / 2;

    let message = `the total is ${total} and average is ${average}`;
    sum.textContent = message

    console.log(message);
  }
})