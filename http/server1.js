var http=require('http');
http.createServer(function(request,response){
    console.log(request.method+":"+request.url);
    response.writeHead(200,{'Content-Type':'text/html'});
    response.end('<h1>hello node</h1>');
}).listen(8000);
