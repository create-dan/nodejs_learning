const http = require('http');
const fs = require('fs');

const server = http.createServer( (req, res) =>{

      if(req.url=="/"){
          res.end("home");
      }
      else if(req.url=="/about"){
          res.end("about");
      }
      else if(req.url=="/contact")
      {
          res.end("contact");
      }
      else if(req.url=="/userapi"){

          fs.readFile(`${__dirname}/UserApi/UserApi.json` , "utf-8" , (err , data) =>{
 
                  console.log(data);
                  res.end("API");
          });


    
       
      }
      else{
          res.writeHead(404, { "Content-type" : "text/html"});
          res.end("404 error");
      }
         

});


server.listen(8000 , "127.0.0.1" , () =>{

    console.log("listening to port 8000");
})