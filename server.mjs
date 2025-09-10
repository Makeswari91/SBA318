//Imports
import express from 'express';
import usersRoutes from './routes/usersRoutes.mjs';
import postsRoutes from './routes/postsRoutes.mjs';
import commentsRoutes from './routes/commentsRoutes.mjs';

//setups
const app = express();
const PORT = 3000;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use('/users', usersRoutes);
app.use('/posts', postsRoutes);
app.use('/comments', commentsRoutes);

//globalerror handling
app.use(function (err, req, res, next) {
  res.status(500).json({ msg: err.message });
});

//server listener
app.listen(PORT, () => 
    console.log(`Server running on port ${PORT}`)
);
