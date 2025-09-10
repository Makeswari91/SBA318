import express from 'express';
import {users} from '../data/users.mjs';
const router= express.Router();

router
   .route("/")
   .get((req, res)=>
   {
    res.json(users);
   })
   

// show one user route

router
  .route("/")
  .get((req,res)=>{
    const  user = users.find((user) => user.id == req.params.id);
    if(user) res.json(user)
        else throw new Error(`User not found`);
})



export default router;