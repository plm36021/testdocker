var http = require('http');
const PORT = 8000;

function onRequest(request, response){
  response.end('Hello ${process.Platform}');
}

var server = http.createServer(onRequest);

server.listen(PORT, function(){
  console.log('${process.env.NODE_ENV} server listening on port: ${PORT}. CTRL-C zo exit');
});
