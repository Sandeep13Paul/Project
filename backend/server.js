const express = require("express");
const app = express();
require('dotenv').config(); // Load environment variables


app.use('/', (req,res)=>{
    res.send('first route');
})

app.use('/hello', (req,res)=>{
    res.send("Hello everyone");
})

app.listen(process.env.PORT, ()=>{
    console.log(`Listening to Port: ${process.env.PORT}`);
})