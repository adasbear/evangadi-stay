const myFirst = require('./myFirst')
const mySecond = require('./mySecond')
const fs = require('fs')

console.log(myFirst)

console.log(myFirst(5))
console.log(mySecond(5))

let passed = `The value of 14 when passed through the myMultiplier function is ${myFirst(14)} `;
console.log(passed)

fs.writeFile('results.txt', passed, err =>{
    if(err){
        console.error(err)
        return;
    }
    console.log('file created')
});

let passed2 = `\nThe value of 14 when passed through the myMultiplier function is ${mySecond(14)} `;
console.log(passed2)

fs.appendFile('results.txt', passed2, err => {
    if(err){
        console.error(err)
    }
    console.log('new line added')
})