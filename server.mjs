//Imports
import express from 'express';

//setups
const app = express();
const PORT = 3000;

//middleware

//globalerror handling

//server listener
app.listen(PORT, () => 
    console.log(`Server running on port ${PORT}`)
);
