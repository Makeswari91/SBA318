import express from 'express';
import {posts} from '../data/posts.mjs';
const router= express.Router();

router
   .route("/")
   .get((req, res)=>
   {
    res.json(posts);
   })



export default router;