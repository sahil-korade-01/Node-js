const http = require("http");

const server = http.createServer((req, responce) => {
  // console.log(req.url);

  if (req.url == "/") {
    responce.end("Hello ");
  } else if (req.url == "/about") {
    responce.end("this is the about page");
  } else if (req.url == "/contact") {
    responce.end("this is the contact page");
    console.log("this is the contact page");
  }else{
    responce.writeHead(404,{"Content-type": 'text/html'})
    responce.end("<h1>404 page not exist</h1>")
  }


  // request => aap jo server ko yani ki google ko search krake koi req bhejte ho
  // responce => yani google aapki request ka answer deta hain vo hota hai responce

  // ye code server main print hota hain
});
// ye code sirf apko server create krne ke kam aata hain
server.listen(8000, "127.0.0.1", () => {
  console.log("listning to the port 8000");
});
