const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
   
    age:{
        type:Number,
        required:true
    },
    weight:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('Userss',userSchema)