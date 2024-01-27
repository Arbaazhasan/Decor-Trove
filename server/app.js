import express from "express";
import dotenv from "dotenv";
import dbConnection from "./data/databaseConnection.js";
import userRouter from "./Routes/user.js";
import productRouter from "./Routes/product.js";
import adminRouter from './Routes/admin.js';
import cookieParser from "cookie-parser";
import cors from "cors";
import bodyParser from "body-parser";

import { v2 as cloudinary } from 'cloudinary';



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
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));


// Configure for cros Origin 
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
    methods: ["GET", "POST", "DELETE", "PUT"]
}));


// Routes
app.use('/api/v1/user/', userRouter);
app.use('/api/v1/product/', productRouter);
app.use('/api/v1/admin/', adminRouter);


app.get('/', (req, res) => {
    res.send("done");
});



cloudinary.config({
    cloud_name: 'ddixq9qyw',
    api_key: '457974513769685',
    api_secret: 'vtXUFQ4XPDtF7xYlCASYgIolvtE'
});


// Server
app.listen(process.env.PORT, (req, res) => {
    console.log(`server is Working on : \n${process.env.HOST + process.env.PORT}`);
});