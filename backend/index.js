 const express = require('express')
 const mongoose= require('mongoose')

 const app=express()

//  const DB=process.env.MONGO_URI
const DB="mongodb+srv://VibhorSingh:Vibh0r$ingh@cluster0.shi3y.mongodb.net/fitness?retryWrites=true&w=majority"
 mongoose.connect(DB,{
     useNewUrlParser: true,
    //  useCreateIndex: true,
     useUnifiedTopology: true,
    //  useFindAndModify: false
 }).then(()=>{
     console.log("DB connection successfull");
 }).catch((err)=>console.log(err));
 
 const Userroute=require('./routers/Userroute');

 app.use('/user',Userroute)
 app.listen(4000,() => {
    console.log("Started on PORT 4000");
    })