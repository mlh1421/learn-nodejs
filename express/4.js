var express=require('express');
var router=express.Router();
var app=express();
router.get('/foods',function(req,res){
    res.send('jjjj');
})
app.use('/api',router);
var server=app.listen(2000,function(){
    var host=server.address().host;
    var post=server.address().post;
})
