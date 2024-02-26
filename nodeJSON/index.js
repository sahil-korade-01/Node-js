

// JSON stand for javascript object notation

// json is lightweight format for storing and transporting database

// json is used when data is send for server to web page


const fs = require("fs")
const bioData = {
    name : "sahil",
    age: 23,
    lastName: "korade"
}

    const jsonData = JSON.stringify(bioData)
    console.log(jsonData);

    // fs.writeFile("json1.json", jsonData,(err,data)=>{
    //     console.log(data);
    // })

    fs.readFile('json1.json','utf-8',(err,data)=>{
        // console.log(data);
        const orgData = JSON.parse(data)
        console.log(orgData);
        
    })