// import Third party module :: Express module... 
const express = require('express');
const app = express();

// import inbuilt module :: path module...
const path = require('path');


// inbuilt variable.... 

console.log(" Path of __dirname  is = " + __dirname + "\n");
console.log(" Path of __filename is = " + __filename + "\n");

const home = path.join( __dirname, 
    '/html_files/index.html' );

const about = path.join( __dirname, 
    '/html_files/about.html' );

const blog = path.join( __dirname, 
    '/html_files/blog.html' );

const service = path.join( __dirname, 
    '/html_files/service.html' );

const contact = path.join( __dirname, 
    '/html_files/contact.html' );

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

