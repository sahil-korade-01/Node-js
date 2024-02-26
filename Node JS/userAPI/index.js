const http = require("http");
const fs = require("fs")

const server = http.createServer((req, responce) => {
  if (req.url == "/") {
    responce.end("Hello ");
  } else if (req.url == "/about") {
    responce.end("this is the about page");
  }
  else if (req.url == "/userAPI") {
    fs.readFile(`${__dirname}/userAPI/userAPI.json`,"utf-8",(err,data)=>{
   console.log(data);
   responce.end(data);

    })

    
  } 
  else {
    responce.writeHead(404, { "Content-type": "text/html" });
    responce.end("<h1>404 page not exist</h1>");
  }
});
server.listen(8000, "127.0.0.1", () => {
  console.log("listning to the port 8000");
});
