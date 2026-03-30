console.clear()
console.log('My first module');

function myMultiplier(x){
    return x*2;
}

console.log(myMultiplier(5))

result = myMultiplier(5);

console.log(result);

module.exports = myMultiplier;