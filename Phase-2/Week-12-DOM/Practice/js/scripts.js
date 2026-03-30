// // // Selecting a specific element
// // let abebeElement = document.getElementById("abebe");
// // // console.log(abebeElement);
// // console.log(abebeElement.textContent);

// // // Binding an event with an element
// // let kebedeElement = document.getElementById("kebede");
// // kebedeElement.addEventListener("click", function () {
// //   // console.log(kebedeElement);
// //   console.log(kebedeElement.textContent);
// // });

// // // Altering a value
// // let almazElement = document.getElementById("almaz");
// // almazElement.addEventListener("click", function () {
// //   // console.log(almazElement);
// //   // console.log(almazElement.textContent);
// //   almazElement.textContent = "Altered text";
// // });

// // // You can also take out the function on its own and give it a name
// // let almazElement = document.getElementById("almaz");
// // almazElement.addEventListener("click", changeAlmaz);
// // function changeAlmaz() {
// //   // console.log(almazElement);
// //   // console.log(almazElement.textContent);
// //   almazElement.textContent = "Altered text";
// // }

// let almazElement = document.getElementById("almaz");
// let challaElement = document.getElementById("challa");
// challaElement.addEventListener("click", someName);

// function someName() {
//   // console.log(almazElement);
//   // console.log(almazElement.textContent);
//   almazElement.textContent = "Altered text";
// }

// // Handling the addition form submission
// let adderForm = document.getElementById("adder");
// adderForm.onsubmit = handleAddition;
// // adderForm.addEventListener("submit", handleAddition);

// function handleAddition(e) {
//   e.preventDefault();
//   let firstValue = document.getElementsByName("first-value")[0].value;
//   let secondValue = document.getElementsByName("second-value")[0].value;
//   let resultHolder = document.getElementById("sum");
//   let result = "";

//   if (isNaN(firstValue) || isNaN(secondValue)) {
//     // console.log("Please enter numerical values to do addition");
//     result = "Please enter numerical values to do addition";
//   } else {
//     result = adder(firstValue, secondValue);
//     // result = Math.pow(firstValue, secondValue);
//     // console.log(result);
//   }

//   resultHolder.textContent = result;
// }

// // Adder
// function adder(a, b) {
//   a = Number(a);
//   b = Number(b);
//   return a + b;
// }

// // Confirmation
// // Handling the Confirmation up on form submission
// let confirmation = document.getElementById("userInfo");
// confirmation.onsubmit = handleConfirmation;

// function handleConfirmation(e) {
//   e.preventDefault();

//   let firstName = document.getElementsByName("first-name")[0].value;
//   let lastName = document.getElementsByName("last-name")[0].value;
//   let email = document.getElementsByName("email")[0].value;
//   let confirmationHolder = document.getElementById("confirmation");
//   let confirmationMessage = "You entered this values: <br>";

//   if (firstName === "") {
//     confirmationHolder.innerHTML = "First name field is required";
//   } else {
//     confirmationHolder.innerHTML =
//       confirmationMessage +
//       "First name: " +
//       firstName +
//       "<br>" +
//       "Last name: " +
//       lastName +
//       "<br>" +
//       "Email: " +
//       email +
//       "<br>";
//   }
// }


let abe = document.getElementById('abebe');
console.log(abe);

let head = document.getElementById('header')
console.log(head.className);

head.className = 'purple';
head.style.backgroundColor = 'red';
head.style.color = '#fff'

// let kebe = document.querySelector('.kebede');

// console.log(kebe);
// 
// we can use the ff to select multiple html elements at once!!
// getElementByTagName() - This does not return a live DOM object.
// getElementByClassName()
// querySelectorAll()
// We can use index number to select only one element even if we use multiple element selectors!!f
// The getElementById selector works by selecting the reference, that way it gives us the live update.
// So when we work with these kinds, the ones that gives us the live value, even though we log it out before we change it it changes everything again and logs it again.


let Almaz = document.getElementById("almaz");
console.log(Almaz);

let Chala = Almaz.previousElementSibling;
console.log(Chala)
Chala.className = "toHave"
Chala.textContent = "I will change u"

let newOne = document.createElement('p');
console.log(newOne);
newOne.textContent = "this is a new element!"

document.body.appendChild(newOne);

// Js Events
/*
 -> Any action that is taken on the browser is called an event.
    - Click, hover, scroll, etc are events
*/

/*
    ##Event Types##
    Often, when events happen, u may want to do something!!

    ## Event Handling ## 
    -> There are 3 things that happen:
        1. we select an element where we want to respond.
        2. We bind an event with that selected element
        3. then we attac our script to the event and to the element
    
    ## ways to bind eveents ##
        1. HTML Event Handler 

    
    ## Event Listner Method

    element.addEventListener(event, function)
*/