 const express = require('express')
 const mongoose= require('mongoose')
 const path = require('path')
 const app=express()
 const bodyParser = require("body-parser")
 const cors = require('cors')
 app.use(bodyParser.urlencoded({ extended: true }));
 app.use(cors())
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
 
 app.use(express.json());
 const Userroute=require('./routers/Userroute');

 app.use('/user',Userroute)
//  app.use('/calories',updateCalories)
 
 app.use('/data', express.static(path.join(__dirname, 'public')));
 app.listen(4000,() => {
    console.log("Started on PORT 4000");
    })