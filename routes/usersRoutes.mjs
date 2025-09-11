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
  .route("/:id")
  .get((req,res)=>{
    const  user = users.find((user) => user.id == req.params.id);
    if(user){
       res.json(user);
    }
        else {
          res.status(404).json({error: 'User not found'})
        };
})
     .post((req,res)=>{
          let {name, username, age}= req.body;
    let newentry = {id: users.length,
        name,
        username,
        age
    }
    users.push(newentry)
    res.status(201).json({msg: 'New entry created', item: newentry});

})
  .put((req,res) =>{
    let id = Number(req.params.id);
 users.splice(id, 1, req.body)


res.json({msg: 'Item updated', item: req.body});
})

 .delete((req, res) => {
  let id = Number(req.params.id);

  users.splice(id, 1)

  res.json({ msg: "Item deleted" });
});

export default router;