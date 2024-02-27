

const express = require("express")
const path = require("path")

const app = express()

const staticPath = path.join(__dirname,"../public")
app.use(express.static(staticPath))
 

app.get("/",(request,responce)=>{
    responce.send("Welcome to github push home page")
})

app.listen(4000,()=>{
    console.log('listinig the port number 3000');
})