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

//route
app.use('/api/users', usersRoutes);
app.use('/api/posts', postsRoutes);
app.use('/', commentsRoutes);

app.get('/', (req, res) => {
  res.send('Testing');
});


//globalerror handling


//server listener
app.listen(PORT, () => 
    console.log(`Server running on port ${PORT}`)
);
