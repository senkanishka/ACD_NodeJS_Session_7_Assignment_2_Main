var http = require('http');

//variable declaration
var num = 14;

var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  if (num % 2 === 0 ) {
  	console.log("Given number" + " " + num + " "+ "is even number");
  	response.end("Given number" + " "+ num + " "+"is even number");
  } else {
  	console.log("Given number" +" "+ num + " "+"is odd number");
  	response.end("Given number" + " " + num + " "+ "is odd number");
  }

});

server.listen(3000);
console.log("Server running at http://127.0.0.1:3000/");
