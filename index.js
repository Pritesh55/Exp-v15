// ------------------------------------------------------------------------

// import Third party module :: Express module... 
const express = require('express');
const app = express();

// import inbuilt module :: path module...
const path = require('path');

// import Third party module :: body-parser module... 

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

// ------------------------------------------------------------------------

// define PORT number  
const PORT = process.env.PORT || 4200;

// ------------------------------------------------------------------------

// inbuilt variable.... 
console.log(" Path of __dirname  is = " + __dirname + "\n");
console.log(" Path of __filename is = " + __filename + "\n");

// -------------------------------------------------------------------------

// Make variable :: path of index.html file.....
const home = path.join(__dirname,
    '/html_files/index.html');

// Make variable :: path of about.html file.....
const about = path.join(__dirname,
    '/html_files/about.html');

// Make variable :: path of blog.html file.....
const blog = path.join(__dirname,
    '/html_files/blog.html');

// Make variable :: path of service.html file.....
const service = path.join(__dirname,
    '/html_files/service.html');

// Make variable :: path of contact.html file.....
const contact = path.join(__dirname,
    '/html_files/contact.html');

// Make variable :: path of Form.html file.....
const form = path.join(__dirname,
    '/html_files/form.html');

// Make variable :: path of login.html file.....
const login = path.join(__dirname,
    '/html_files/login.html');


// ------------------------------------------------------------------------

// When url is "/home" => display index.html file 

app.get("/", (req, resp) => {
    resp.sendFile(home);
});

// When url is "/about" => display about.html file 

app.get("/about", (req, resp) => {
    resp.sendFile(about);
});

// When url is "/blog" => display blog.html file 

app.get("/blog", (req, resp) => {
    resp.sendFile(blog);
});

// When url is "/service" => display service.html file 

app.get("/service", (req, resp) => {
    resp.sendFile(service);
});

// When url is "/contact" => display contact.html file 

app.get("/contact", (req, resp) => {
    resp.sendFile(contact);
});

// When url is "/form" => display form.html file 

app.get("/form", (req, resp) => {
    resp.sendFile(form);
});

// ------------------------------------------------------------------------

// get the data from user and post it to here...
app.post('/api/v1/register', (req, resp) => {

    // save form data to new variables...
    const fname = req.body.name;
    const femail = req.body.email;
    const fpass = req.body.pass;

    // send response based on user data....
    resp.send(" <h1> Thank you.. </h1> <hr> <br>      <h1> Your name :: &nbsp " + fname + "</h1>" + "<br> <h1> Your email :: &nbsp " + femail + "</h1>" + "<br> <h1> Your passward :: &nbsp" + fpass + "</h1> <hr>");

});

// ------------------------------------------------------------------------

app.listen(PORT, () => {
    console.log("server is working on PORT no :: "
        + PORT + "\n" + "http://localhost:" + PORT);
});

// ------------------------------------------------------------------------

