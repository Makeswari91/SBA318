//Imports
import express from 'express';

//setups
const app = express();
const PORT = 3000;

//middleware
app.use(express.json());

//route
app.get('/', (req, res) => {
  res.send('Testing');
});


//globalerror handling


//server listener
app.listen(PORT, () => 
    console.log(`Server running on port ${PORT}`)
);
