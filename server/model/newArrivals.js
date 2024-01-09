import mongoose, { mongo } from "mongoose";

const newArrivalsSchema = mongoose.Schema({

    itemNo: {
        type: Number
    },
    category: {
        type: String,
        require: true,
        unique: true
    },

    productNo: {
        type: String
    }
});


export const newArrivalsModel = new mongoose.model("NewArrivals", newArrivalsSchema);
