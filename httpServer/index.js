
// Creating our own web server using http module

// 1) require http module

const http = require('http');

const server = http.createServer((req , res)=>{


    res.end("hello world");
})

server.listen(8000 , "127.0.0.1" , () => {
    console.log("connection the world is going to chag")
})



