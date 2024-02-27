

const exp = require("express")

const app = exp()

 

app.get("/",(request,responce)=>{
    responce.send("Welcome to github push home page")
})

app.listen(4000,()=>{
    console.log('listinig the port number 3000');
})