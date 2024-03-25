import express from "express";
import { checkout, paymentVerification, razorpay_API_Key } from "../Controller/payment.js";

const router = express.Router();

router.post("/checkout", checkout);

router.post("/paymentverification", paymentVerification);

router.get('/getkey', razorpay_API_Key);

export default router;