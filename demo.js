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