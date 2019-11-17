
var express=require("express");
var app=express();


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Use Middleware
app.use(express.json());
//app.use("/student",studRoutes);

app.get("/",function(request,response){
    response.send("Welcome to my Application..");
        });
//listen to port for requests
app.listen(6000, function(){
    console.log("Server Started on port .. " );
})
