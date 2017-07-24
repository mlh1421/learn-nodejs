var fs=require('fs');
fs.stat('a.txt',function(err,stat){
    if(err){
        console.log(err);
    }else{
        console.log(stat.isFile());
        console.log(stat.isDirectory());
        if(stat.isDirectory()){
            console.log("size:"+stat.size);
            console.log('birthtime:'+stat.birthtime);
            console.log('modified:'+stat.mtime);
        }
    }
})
