var express=require("express");
var app=express();
//this is very important to set path current directory to hi agay hum simple peer ki library load kar saktay hay

//now we make  a file of simplepeer.js static and used in peerchat.html
app.use(express.static(__dirname+"/public"));
app.get("/",function(req,res){
    res.sendFile(__dirname+"/public"+"/peercall.html");
});
app.listen(process.env.PORT||3000);



