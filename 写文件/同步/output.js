var fs=require("fs");
var data=fs.readFileSync('output.txt','utf-8');
fs.writeFile('jj.txt',data,function(err){
    if(err){
        console.log(err);
    }else{
        console.log("ok");
    }
})
