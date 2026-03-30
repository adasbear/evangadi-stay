console.clear()
const http = require('http')

const random = () =>{
    return Math.floor(Math.random() * 100) + 1;
}

console.log(random())

const result = random()
console.log(result)

module.exports = random;