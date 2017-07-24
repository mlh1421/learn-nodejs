var express=require('express');
var birds=require('./birds');
var app=express();
app.use('/birds',birds);
var server=app.listen(2000,function(){
    var host=server.address().host;
    var post=server.address().post;
})
