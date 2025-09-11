//Imports
import express from 'express';
import usersRoutes from './routes/usersRoutes.mjs';
import postsRoutes from './routes/postsRoutes.mjs';
import commentsRoutes from './routes/commentsRoutes.mjs';
import fs from 'fs';
//setups
const app = express();
const PORT = 3000;
app.engine('perscholas', (filePath, options, callback)=>{
     fs.readFile(filePath, (err, content)=>{
      if (err) return callback(err);

      let rendered;

      rendered = content.toString().replaceAll("#title#", options.title)


      return callback(null,rendered)
     })
})
app.set('views', './views');
app.set('view engine', 'perscholas');

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use('/users', usersRoutes);
app.use('/posts', postsRoutes);
app.use('/comments', commentsRoutes);
app.get('/home', (req, res)=>{

     let options = {title: 'Add User'}; 
     res.render('index', options)

})
//globalerror handling
app.use(function (err, req, res, next) {
  res.status(500).json({ msg: err.message });
});

//server listener
app.listen(PORT, () => 
    console.log(`Server running on port ${PORT}`)
);
