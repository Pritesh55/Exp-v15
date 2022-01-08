// index.js file

// imPORT Third party module :: Express module... 
const express = require('express');
const app = express();

// define PORT number  
const PORT = process.env.PORT || 4200;

app.get("/", (req, resp) => {
    resp.send("<h1> Jay shree ram...</h1>");
});

app.listen(PORT, () => {
    console.log("server is working on PORT no :: " + PORT + "\n" + "http://localhost:" + PORT);
});