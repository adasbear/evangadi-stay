const mysql = require('mysql2');
const express = require('express')
const bodyParser = require('body-parser')
//Creating our express server 
let app = express();

let port = 3001;

app.listen(port, () => {
    console.log('Listening to port ' + port)
})

app.use(bodyParser.urlencoded({
    extended: true
}))

/*
## Another way of doing the above

app.use(app.json())
app.use(app.urlencoded({
extended: true
}));

*/

let mysqlConnection = mysql.createConnection({
    socketPath: '/var/run/mysqld/mysqld.sock',
    user: 'safedb',
    password: 'adilo14216135@A',
    database: 'safedb',
})

mysqlConnection.connect((err) => {
    //we have our callback funciton
    if (err) console.log(err);
    else console.log('Connected');
})

app.get('/install', (req, res) => {
    let message = 'tables created'
    let createProducts = `CREATE TABLE IF NOT EXISTS Products(
        product_id int auto_increment,
        product_url varchar(255) not null,
        productP_name varchar(255) not null,
        PRIMARY KEY (product_id)
    )`;

    mysqlConnection.query(createProducts, (err, results, fields) => {
        if (err) console.log(err);
    })

    res.end(message);
});

//Inserting Data 

/*
Syntax

INSERT INTO table_name
    (col1, col2, col3)
VALUES
    (val1, val2, val3) 
*/

app.post('/addiphone', (req, res) =>{
    console.log(req.body.iPhoneId)
    let id = req.body.iPhoneId
    let imgPath = req.body.imgPath
    let pageLink = req.body.pageLink

    // Destructuring
    /*
    const {name, address, company} = req.body;
    */

    let addProduct =
      "INSERT INTO Products (product_url, productP_name) VALUES ('" +
      id +
      "', '" +
      imgPath +
      "')"; 

    mysqlConnection.query(addProduct, (err, result) => {
      if (err) console.log(err);
      console.log("record added!!");
    });

    res.end('I am working my fucking Job!!')
})


// We get this response 
/*
product_id	product_url	productP_name	

{ 
iPhoneId: 'sf', 
imgPath: 'sdfdf', 
pageLink: 'meis.com' 
}
*/



//Selecting

/*
### Syntax

SELECT * FROM table_name;
* <- means : Selects all the information from that table.
we can also add:

WHERE product_id = sth <- this is a condtion that we add to select specific row.
LIMIT 3; to limit the response we get!! gives us the first 3.
ORDER BY product_id ASC <- uses the product id to order in ascending order.

*/