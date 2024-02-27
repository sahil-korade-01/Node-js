


const express = require("express")
const app = express()
const port = 4000


app.get("/",(request,responce)=>{
    responce.send("Hello Guys This is the git welcome page")
})

app.get("/about",(request,responce)=>{
    responce.send("This is the about page")
})

app.get("/contact",(request,responce)=>{
    responce.send("this is the contact page")

})

app.get("/login",(request,responce)=>{
    responce.send("this is the login page")
})

app.listen(`${port}`,()=>{
    console.log("the listining number is 4000");
})


