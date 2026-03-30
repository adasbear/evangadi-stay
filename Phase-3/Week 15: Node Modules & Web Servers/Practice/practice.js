import { sum } from './practice.js';

console.log('Running with node')

// Avoiding namespace collision by creating a global object
const first = {
    x(){
        console.log('Me is the best')
    },
}

const second = {
    x(){
        console.log('Me is the bester')
    },
}

first.x()
second.x()

// The IIFE way of solving namespace collision.

()();

//exporting var names to global scope
module.exports.sum = x;

//importing module

const ex = require('express');

// Creating our own server

/* 
When we think of creating our own server, we have to have a listner that is waiting for the users request 24/7 which is configured to the correct port. usually for HTTP request it is port 80, so we need to have a listner waiting on that port.
*/