// require('domain').config({path: './env'});

import connectDB from './db/db.js'
import dotenv from 'dotenv';
import {app} from './app.js';

dotenv.config({
    path: './env',
});

connectDB()
.then(() => {
    app.on('error', (err) => {
        console.error(err);
        throw err;
    })
    app.listen(port, function() {
        console.log(`listening on ${port}`);
    });
})
.catch((err) => {
    console.log("Mongodb not connected",err.message);
});