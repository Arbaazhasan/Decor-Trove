import express from "express";
import dotenv from "dotenv";
import dbConnection from "./data/databaseConnection.js";
import userRouter from "./Routes/user.js";
import productRouter from "./Routes/product.js";
import adminRouter from './Routes/admin.js';
import paymentRouter from './Routes/paymentsRoutes.js';
import orderDetailsRouter from './Routes/order.js';

import cookieParser from "cookie-parser";
import cors from "cors";
import bodyParser from "body-parser";

import { v2 as cloudinary } from 'cloudinary';
import Razorpay from "razorpay";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



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


// Configure for Cross Origin 
app.use(cors({
    origin: (origin, callback) => callback(null, true),
    credentials: true,
    methods: ["GET", "POST", "DELETE", "PUT", "OPTIONS"]
}));


// Routes
app.use('/api/v1/user/', userRouter);
app.use('/api/v1/product/', productRouter);
app.use('/api/v1/admin/', adminRouter);
app.use('/api/v1/order/', orderDetailsRouter);
app.use('/api/v1/paymets/', paymentRouter);


const candidatePaths = [
    path.join(__dirname, "../client/dist"),
    path.join(process.cwd(), "client/dist"),
    path.join(process.cwd(), "../client/dist"),
    path.join(__dirname, "client/dist")
];

const clientDistPath = candidatePaths.find(p => fs.existsSync(p)) || candidatePaths[0];
app.use(express.static(clientDistPath));

app.get("*", (req, res) => {
    if (!req.path.startsWith("/api")) {
        const indexPath = path.join(clientDistPath, "index.html");
        if (fs.existsSync(indexPath)) {
            return res.sendFile(indexPath);
        }
    }
    res.status(404).json({ success: false, message: "Route not found" });
});


// Cloudinary Configrination

cloudinary.config({
    cloud_name: process.env.Cloudinary_cloud_name,
    api_key: process.env.Cloudinary_api_key,
    api_secret: process.env.Cloudinary_api_secret
});


// cloudinary.config({
//     cloud_name: "ddixq9qyw",
//     api_key: "457974513769685",
//     api_secret: "vtXUFQ4XPDtF7xYlCASYgIolvtE"
// });

// Razorpay Instance

export const instance = new Razorpay({
    key_id: process.env.Razorpay_Key_Id,
    key_secret: process.env.Razorpay_Key_Secret,
});


// Server (only start listening if not running as a Vercel serverless function)
if (!process.env.VERCEL) {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`Server is working on port: ${PORT}`);
    });
}

export default app;