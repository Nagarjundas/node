// var a = 10;
// var b = 5 ;
// console.log(a+b);

// function test(){

//     console.log("hiii this is a test function ")

// }

// test();

// var http = require('http');
// http.createServer(function(req,res){
// res.write("hello from node js server");
// res.end();

// }).listen(5000);

// function add(a,b){

//     return a + b;
// }

// function compile(add){

//     console.log(add(10,7));
// }
// compile(add);

// var other = require('./other')
// console.log(other());

// var http = require('http');
// http.createServer(function(req, res){
// var data = [{name : 'naga' , age : "28"},{name : 'naga1' , age : "28"},{name : 'naga2' , age : "28"}]
// res.writeHead(200,{'Content-Type': 'application/json'});
// res.write(JSON.stringify(data));
// res.end();
// console.log("hiiii");

// }).listen(3900)
// var http = require('http');
// http.createServer(function(req, res) {
//     var page = `<h1>NODE HTML</h1><input type = 'text'  /><br> <br><br><input type = 'text'  /><br><br><input type = 'text'  /><br><br><input type = 'text'  />`
//     res.writeHead(200,{'Content-Type': 'text/html'});
//     res.write(page);
//     res.end();
// }).listen(4000)


// var http = require('http');
// var uc = require('upper-case');
// http.createServer(function(req, res) {
//     res.write(uc.upperCase("this is a example of upper case pacakge install"));
//     res.end();
// }).listen(4000)

// sending mail to a account 

// var nodemailer = require('nodemailer');
// var transport = nodemailer.createTransport({

//     host: 'smtp.gmail.com',
//     port: 587,
//     secure: false,
//     require: true,
//     auth: { user: 'nagarjun.das59@gmail.com', pass: 'Aaaaaaaaaa10' }


// });
// var mailOption = {

//     from: 'nagarjun.das59@gmail.com',
//     to: 'dasnagarjun007@gmail.com',
//     subject: 'test node',
//     text: 'Hello yes it is working '

// }
// transport.sendMail(mailOption, function (err, info) {
//     if (error) {
//         console.log(error);
//     }
//     else {
//         console.warn('email sent', info.response);
//     }
// }


// )


// var http = require('http');
// http.createServer(function (req, res) {

//     res.write("hello this is a example of testing in youtube and nodemon tutorial");
//     res.end();
// }).listen(4500)

// READING FILE SYSTEM

// var http = require('http');
// var fs = require('fs');

// http.createServer(function(req, res) {

//     fs.readFile('demo.html',function(err,data){

//         res.writeHead(200,{'Content-Type': 'text/html'})
//         res.write(data);
//         return res.end();
//     })
// }).listen(4500);


// EVENTS in nodejs.

// var fs = require('fs');
// var rs = fs.createReadStream('./demo.js');
// rs.on('open',function(){

//     console.log("demo file is open");
// });