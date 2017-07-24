var http=require('http');
var fs=require('fs');
var url=require('url');
var path=require("path");
var root=path.resolve('.');//获取当前目录
var server=http.createServer(function(request,response) {
    var pathname=url.parse(request.url).pathname;
    var filename=path.join(root,pathname);
    con
})
