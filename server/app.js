import express from "express";
import dotenv from "dotenv";
import dbConnection from "./data/databaseConnection.js";
import userRouter from "./Routes/user.js";
import productRouter from "./Routes/product.js";
import cookieParser from "cookie-parser";

// DotEnv Configuration
dotenv.config({
    path: './data/config.env'
});


// Database Connectivity 
dbConnection(process.env.DB_CONNECTION);


// Middlewares
const app = express();
app.use(express.json());
app.use(cookieParser());



// Routes
app.use('/api/v1/user/', userRouter);
app.use('/api/v1/product/', productRouter);


app.get('/', (req, res) => {
    res.send("done");
});


// Server
app.listen(process.env.PORT, (req, res) => {
    console.log(`server is Working on : \n${process.env.HOST + process.env.PORT}`);
});