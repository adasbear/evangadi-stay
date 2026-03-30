console.clear();
const http = require("http");
const randomNumber = require("./randomNumber");
const fs = require("fs");
const url = require("url");
const mimetypelookup = require("mime-types").lookup;

// const server = http.createServer(function (req, res) {
//   for_user = `${randomNumber()}`;
//   res.end(for_user);
// });

// server.listen(1234, () => {
//   console.log("listening to port 1234");
// });


// for question d

// const server = http.createServer(function(req, res){

//     let parsedUrl = url.parse(req.url, true);
//     console.log(parsedUrl);

//     let filePath = parsedUrl.path;
//     console.log(filePath)
//     console.log(__dirname)

//     if (filePath == '/'){
//         filePath = '/about.html'
//     }

//     let requestedFile = __dirname + '/static/apple-html-css-replica' + filePath;
//     console.log(requestedFile)

//     const readFile = fs.readFile(requestedFile, function(err, content){
//         if(err){
//             res.writeHead(404)
//             res.end()
//         }else{
//             res.writeHead(200, {"content-type": 'text/html'})
//             res.end(content)
//         }
//     })
// })

// server.listen(1234, () => {
//   console.log("listening to port 1234");
// });


// for question e

const server = http.createServer(function(req, res){
    let parsedUrl = url.parse(req.url, true);
    console.log(parsedUrl);
    let filePath = parsedUrl.path;
    console.log(filePath)
    console.log(__dirname)

    if (filePath == '/'){
        filePath = '/index.html'
    }

    let requestedFile = __dirname + '/static/apple-html-css-replica' + filePath;
    console.log(requestedFile)

    const readFile = fs.readFile(requestedFile, function(err, content){
        if(err){
            res.writeHead(404)
            res.end()
        }else{

            let mime = mimetypelookup(filePath)
            
            res.writeHead(200, {"content-type": mime})
            res.end(content)
        }
    })
})

server.listen(1234, () => {
  console.log("listening to port 1234");
});