import express from 'express';
import cors from 'cors';

import cookieParser from 'cookieparser';

const app = express();
const port = process.env.PORT || 3500;

app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(cookieParser());

export {app};