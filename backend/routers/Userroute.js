const express=require('express')
const router=express.Router();
const userSchema=require('../models/UserSchaema')
router.get('/',async(req,res)=>{
    try{
          const users=await userSchema.find()
          res.json(users)
    }catch(err)
    {
        res.send('Error'+err)
    }
})

router.post('/',async(req,res)=>{
    const userData=new  userSchema({
        name: req.body.name,
        age: req.body.age,
        weight: req.body.weight,
        email: req.body.email
    })
    try{
       const response=await userData.save()
       res.json(response)
    }catch(err)
    {
        res.send('Error')
    }
})
module.exports=router