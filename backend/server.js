const express = require("express");
const app = express();
require('dotenv').config(); // Load environment variables


app.use('/', (req,res)=>{
    res.send('first route');
})

app.listen(process.env.PORT, ()=>{
    console.log(`Listening to Port: ${process.env.PORT}`);
})