const express = require("express");

const path= require("path");
const app = express();
//console.log(app);
const pathToPublic = path.join(__dirname, '../public')
const static = express.static(pathToPublic);
app.use(static);

app.listen(3030, () =>{
    console.log("Servidor corriendo");
}) 


app.get('/', function(req, res){
  res.sendFile (path.join(__dirname, "views/index.html"))
});

app.get('/hopper',(req, res)=>{
  res.sendFile(path.join(__dirname,"views/hopper.html"))
});
app.get('/lovelace',(req, res)=>{
  res.sendFile(path.join(__dirname,"views/lovelace.html"))
});

app.get('/hamilton',(req, res)=>{
  res.sendFile(path.join(__dirname,"views/hamilton.html"))
});

app.get('/clarke',(req, res)=>{
  res.sendFile(path.join(__dirname,"views/clarke.html"))
});

app.get('/turing',(req, res)=>{
  res.sendFile(path.join(__dirname,"views/turing.html"))
});

app.get('/babbage',(req, res)=>{
  res.sendFile(path.join(__dirname,"views/babbage.html"))
});

app.get('/berners-lee',(req, res)=>{
  res.sendFile(path.join(__dirname,"views/berners-lee.html"))
});

//app.get("/", function(req, res){
   // res.send("Bienvenidos al sitio");
//});
//app.get("/contacto", function(req, res){
//    res.send("Dejanos tu contacto!");
//}) 
//app.get("/un-array", function(req, res){
 //   res.send([25,16,11]);
//}) 
//app.get("/path", (req, res)=>{
//    res.sendFile(path.resolve(__dirname,"./test/test.html"))
//}) 
