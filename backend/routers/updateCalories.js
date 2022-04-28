const { response } = require('express');
const express=require('express')
const router=express.Router();
const userSchema=require('../models/UserSchaema')
// router.get('/',async(req,res)=>{
//     try{
//           const users=await userSchema.findOne({"email":req.body.email})
//           res.json(users)
//     }catch(err)
//     {
//         res.send('Error'+err)
//     }
// })
router.get('/:email',async(req,res)=>{
    try{
          const users=await userSchema.findOne({"email":req.params.email})
          res.json(users)
    }catch(err)
    {
        res.send('Error'+err)
    }
})

// router.post('/',async(req,res)=>{
//     console.log(req.body.name)
//     res.send("okay")
//     // const userData=new  userSchema({
//     //     // name: req.body.name,
//     //     age: req.body.age,
//     //     weight: req.body.weight,
//     //     // email: req.body.email
//     // })
//     // try{
//     //    const response=await userData.save()
//     //    console.log(response)
//     //    res.json(response)
//     // }catch(err)
//     // {
//     //     res.send('Error')
//     // }
// })
router.post('/',async(req,res)=>{
    console.log(req.body);
   const userdata=new userSchema({
       calories:req.body.calories,
       email:req.body.email
   })
   try{
    const usersExist=await userSchema.findOne({"email":userdata.email})
    console.log(usersExist);
       if(usersExist)
       {
           console.log('Exists')
        //    if(usersExist.calories)
        //    {
            const data=await updateOne({email:"tony@gmail.com" },{$set:{"name":"LOL"}});
        //    }
        //    else
        //    {
        //     const data=await updateOne({email:usersData.email },{$set:{"calories":(usersExist.calories+req.body.calories)}});
        //    }
        
        res.json(data); 
       }
       else
       {
        console.log('Doesnt Exists');
       }


   }catch(err)
   {
       res.send(err)
   }

})

module.exports=router