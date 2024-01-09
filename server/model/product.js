import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    pNo: {
        type: String,
        require: true,
    },
    name: {
        type: String,
    },
    desc: {
        type: String
    },
    price: {
        string: Number
    },
    size: {
        type: String
    },
    color: {
        type: String
    },
    category: {
        type: String,
        require: true
    },
    isStock: {
        type: Boolean,
        default: true
    },
    photo: {
        type: String
    }
});

export const product = mongoose.model("product", productSchema);