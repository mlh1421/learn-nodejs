var fs=require('fs');
fs.stat('b.txt',function(err,stat){
    if(err){
        console.log(err);
    }else{
        console.log(stat.isFile());
        console.log(stat.isDirectory());
    }
})
