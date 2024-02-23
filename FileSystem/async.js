// Asynchronous way to core modules 



const asyncFS = require("fs")


asyncFS.writeFile('read.txt' ,'udya mi ghri janar ahe ' ,(err)=>{
    console.log("file create ");
})


// jr apn callback function nahi use kel tr error fix yenar tyamule callback adhi use kraychch 

// file tyar kraychi ani nvin data ksa add kraycha


asyncFS.appendFile('read.txt','my name is sahil',(err)=>{
    console.log("data added");
})



asyncFS.readFile('read.txt','utf-8',(err,data)=>{
    console.log("kela read.........",data);
})

