    console.clear()
    // // const os = require('os');
    // // console.log(os);

    // // const freeMemory = os.freemem();
    // // console.log(freeMemory)

    // // console.log(os.platform()); 


    // const http = require('http');
    // const fs = require('fs')
    // const url = require('url');
    // const mimetypelookup = require('mime-types').lookup
    // const server = http.createServer(function(req, res){

    //     let parsedUrl = url.parse(req.url, true);
    //     console.log(parsedUrl)
    //     let filePath = parsedUrl.path;
    //     console.log(filePath)
        
    //     if(filePath == '/'){
    //         filePath = '/index.html'
    //     }
    //         let requestedFile = __dirname + filePath; // This is the main guy, who gives us the path to the file
    //         console.log(requestedFile) 
    
    //         const readFile = fs.readFile(requestedFile, function(err, content){
    //             if(err){
    //                 res.writeHead('404');
    //                 res.end()
    //             } else{
    //                 let mime = mimetypelookup(filePath);
    //                 res.writeHead(200, {'content-type' : mime });
    //                 res.end(content);
    //             }
    //         })
    // });

    // server.listen(9090, function(){
    //     console.log('I am listening')
    // })

    // // on the above example we have created a server, started listening and then we sent a response for the request!!
    // // on the above example, we simply served a simple msg using the res.end() method.

    const express = require('express')

    const app = express();

    app.listen(3000, (err) => {
        console.log('Listening to port 3000')
    })

    app.use(express.static('apple'))
