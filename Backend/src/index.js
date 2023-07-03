import express from 'express';
import bodyParser from "body-parser";
import morgan from 'morgan';
import connectToDatabase from './Connection/mongoDB.js'
import cors from 'cors';
import * as dotenv from "dotenv";



const app = express();

//MongoDb connection
connectToDatabase();
dotenv.config();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(
    cors({
      origin: ["*","http://127.0.0.1:5173"],
      methods: ["PUT", "POST", "DELETE", "GET", "PATCH"],
      credentials: true,
    })
  );

//Router middlewares

import authRouter from './Router/auth.js'
app.use('/',authRouter)

app.listen(3000 ,()=>{
    console.log('Server started at port 3000 ');
})