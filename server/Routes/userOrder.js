import express from "express";
import { getOrderDetails } from "../Controller/payment.js";

const router = express.Router();


router.post("/userorderdetails", getOrderDetails);

export default router


