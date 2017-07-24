var http = require("http");
var url = require("url");
var path = require("path");
var fs = require('fs');
var root = path.resolve(process.argv[2] || '.');
var server = http.createServer(function (request, response) {
    //console.log(request.method + ":" + request.url);
    console.log("root:" + root);
    var pathname = url.parse(request.url).pathname;
    var filepath = path.join(root, pathname);
    console.log(filepath);
   fs.stat(filepath, function (err, stats) {
       if (!err && stats.isFile()) {
            console.log('200' + request.url);
            response.writeHead(200);
            fs.createReadStream(filepath).pipe(response);
        } else {
            console.log('404 ' + request.url);
            发送404响应:
            response.writeHead(404);
            response.end('404 Not Found');
        }
    })
    //response.writeHead(200, { 'Content-Type': 'text/html' });
    //response.end("<h1>hello,js</h1>");
});
server.listen(8080);
console.log("Server is running at http:127.0.0.1:8080/");
