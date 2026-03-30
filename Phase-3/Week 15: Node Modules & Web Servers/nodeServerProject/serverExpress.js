const express = require('express')
const randomNumber = require("./randomNumber");

const port = 1324


const app = express();



app.get('/', (req, res) => {
    res.send('Request received and processed'); 
})

app.listen(port, () =>{
    console.log(`listening to port ${port}`);
})





// const app = express();


// app.get('/', (req, res) => {
//     let final = randomNumber()
//     res.send(`RandomNUmber is: ${final}`); 
// })

// app.listen(port, () =>{
//     console.log(`listening to port ${port}`);
// })




// const app = express();


// let requestedFile = __dirname + '/static/apple-html-css-replica' + '/about.html';

// app.get('/', (req, res) => {
//     res.sendFile(requestedFile) 
// })

// app.listen(port, () =>{
//     console.log(`listening to port ${port}`);
// })

// const app = express();

// app.use(express.static('static/apple-html-css-replica'))

// app.listen(port, () =>{
//     console.log(`listening to port ${port}`);
// })
