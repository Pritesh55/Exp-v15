// imPORT Third party module :: Express module... 
const express = require('express');
const app = express();

// import inbuilt module :: path
const path = require('path');

// inbuilt variable.... 

console.log(" Path of __dirname is = " + __dirname );
console.log(" Path of __filename is = " + __filename + "\n");

const home = path.join( __dirname, '/index.html' );
const about = path.join( __dirname, '/about.html' );
const blog = path.join( __dirname, '/blog.html' );
const service = path.join( __dirname, '/service.html' );
const contact = path.join( __dirname, '/contact.html' );

console.log(" value of home is = " + home + "\n");


// define PORT number  
const PORT = process.env.PORT || 4200;

app.get("/", (req, resp) => {
    resp.sendFile(home);
});

app.get("/about", (req, resp) => {
    resp.sendFile(about);
});

app.get("/blog", (req, resp) => {
    resp.sendFile(blog);
});

app.get("/service", (req, resp) => {
    resp.sendFile(service);
});

app.get("/contact", (req, resp) => {
    resp.sendFile(contact);
});

app.listen(PORT, () => {
    console.log("server is working on PORT no :: "
     + PORT + "\n" + "http://localhost:" + PORT);
});

