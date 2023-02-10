import express  from "express";
import bcrypt from 'bcryptjs'
import User from "../models/UserModel.js";
import userQuery from "../models/userQuery.js";

const userRoute= express.Router();

userRoute.post('/login', async (req, res)=>{
    // const {username, password} = req.body;
    try {
        const user= await User.findOne({username:req.body.username});
        if(user){
            if(bcrypt.compareSync(req.body.password, user.password)){
                res.send({
                    _id:user._id,
                    username:user.username
                });
                return;
            }
              
           } 
                return res.status(400).json(error);
           
    } catch (error) {
        return res.status(400).json(error);
        
    }

});
userRoute.post('/register', async (req, res)=>{
     
    try {
        const newUser= new User({
            username:req.body.username,
            password:bcrypt.hashSync(req.body.password)
        });
        const user = await newUser.save()
        res.send('User Registered Successfully')
        res.send({
            _id:user._id,
            username:user.username
        })
    } catch (error) {
        return res.status(400).json(error);
        
    }

});

    userRoute.post('/submitquery', async(req, res)=>{
       try { 
        const query= new userQuery( req.body);
        await query.save();
        res.send("Your query has been submitted");
        
       } catch (error) {
          return res.status(404).json(error);
        
       }

    })

export default userRoute;
