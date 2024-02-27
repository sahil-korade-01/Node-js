const express = require("express");
const app = express();
const port = 4000;

app.get("/", (request, responce) => {
  responce.send("Hello Guys This is the git welcome page");
});

app.get("/about", (request, responce) => {
  responce.write("<h1>This is the about page</h1>");
  responce.write("<h1>Hello ata closed krun dakhva</h1>");
  responce.send();
});

app.get("/contact", (request, responce) => {
  responce.send("this is contact page");
});

app.get("/login", (request, responce) => {
  responce.json([
    {
      name: "sahil",
      id: 99,
      age: 23,
    },
    {
      name: "chima",
      id: 333,
      age: 23,
    },
  ]);
});

app.listen(`${port}`, () => {
  console.log("the listining number is 4000");
});
