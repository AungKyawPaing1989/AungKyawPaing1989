const express = require ("express");
const express = express();

app.get("/page1",(req,res)=>{
  
  res.send("page1.html")
})

app.get("/page2",(req,res)=>{
  
  res.send("page2.html")
})

app.get("/page3",(req,res)=>{
  
  res.send("page3.html")
})

app.get("/page4",(req,res)=>{
  
  res.send("page4.html")
})

app.listen(3000,()=>{

  
 
   console.log('Server starting up:port:3000:);
 })