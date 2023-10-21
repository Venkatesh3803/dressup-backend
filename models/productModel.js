import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    image: {
        type:String
    },
    price: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    size: {
        type: Array,
        requiredd: true
    },
    color: {
        type: Array,
        required: true,
    },
    category: {
        type: String,
    },
    fabric: {
        type: String,
    },
    mrp: {
        type: String,
    },
    qty: {
        type: String,
    },
    discount: {
        type: String,
    },
    brand: {
        type: String,
    }
}, { timestamps: true })


export default mongoose.model("products", productSchema)