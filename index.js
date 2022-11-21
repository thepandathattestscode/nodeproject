// Require http module
var http = require("http");  

const PORT = process.env.PORT || 3000
  
// Create server
http.createServer(function (req, res) {  
   
    // Send the HTTP header   
    // HTTP Status: 200 : OK  
    // Content Type: text/plain  
    res.writeHead(200, {'Content-Type': 'text/plain'});  
     
    // Send the response body as "This is the example
    // of node.js web based application"  
   res.end('This is the example of node.js web-based application \n');
  
// Console will display the message  
}).listen(PORT, 
    ()=>console.log('Server running at:' + PORT));