var http=require('http');
var fs=require('fs');
var url=require('url');
var path=require("path");
var root=path.resolve('.');
var server=http.createServer(function(request,response){
    console.log(root);
    var pathname=url.parse(request.url).pathname;
    console.log(pathname);
    var filepath=path.join(root,pathname,'index.html');
    console.log(filepath);
    fs.stat(filepath,function(err,stat){
        if(!err&&stat.isFile()){
            response.writeHead(200);
            fs.createReadStream(filepath).pipe(response);
        }else{
            response.writeHead(404);
            response.end('request not found');
        }
    })
}).listen(8000);
