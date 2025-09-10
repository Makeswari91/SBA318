import express from 'express';
import {users} from '../data/users.mjs';
const router= express.Router();

router
   .route("/")
   .get((req, res)=>
   {
    res.json(users);
   })
   .post((req,res)=> {
    const {name, username, age}= req.body;
            //check if we have all data needed to create user
    if(name && username && age){

        if(users.find((user)=> user.username == username)){
            res.status(400).json({err: "username taken"});
            return;
        }
        const user= {
            id: users[users.length -1].id +1,
            name,
            username,
            age
        }
        users.push(user);
        res.json(user);
    }else res.status(400).json({msg: "Insufficient Data"})
});
// show one user route

router
  .route("/")
  .get((req,res)=>{
    const  user = users.find((user) => user.id == req.params.id);
    if(user) res.json(user)
        else throw new Error(`User not found`);
})



export default router;