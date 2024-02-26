const fs = require("fs")
const http = require("http")

const server = http.createServer()
  server.on('request',(req,res)=>{
//     const rstrm = fs.createReadStream('input.txt')
//     rstrm.on('data',(chunk)=>{
// res.write(chunk)

//     })
//     rstrm.on('end',()=>{

//     })
//     rstrm.on('error',(err)=>{
//         console.log("file not found");

//     })

const  rstm = fs.createReadStream('input.txt')
rstm.pipe(res)



  })

  server.listen(8000,"127.0.0.1")
  console.log("server is on 8000 is on");
