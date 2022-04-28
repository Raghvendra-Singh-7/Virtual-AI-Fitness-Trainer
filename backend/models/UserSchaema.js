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
    },
    calories:
    {
        type:Number,
        required:false
    }
    
})

module.exports=mongoose.model('Userss',userSchema)