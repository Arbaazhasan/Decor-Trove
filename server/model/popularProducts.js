import mongoose from "mongoose";

const popularProductSchema = mongoose.Schema({
    sno: {
        type: String
    },

    productNo: {
        type: String
    }
});

export const popularProductModel = new mongoose.model("Popular Product", popularProductSchema);