var http=require('http');
var server=http.createServer(function(request,response){
    console.log(request.method+":"+request.url);
    response.writeHead(200,{'Content-Type':'text/html'});
    response.write("<h2>jkajsdhjk</h2>")
    response.end('<h1>javaScript</h1>')
});
server.listen(201);
