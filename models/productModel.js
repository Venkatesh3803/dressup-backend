import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    desc: {
        type: String,
        require: true,
    },
    image: {
        type: String,
        require: true
    },
    price: {
        type: String,
        require: true,
    },
    gender: {
        type: String,
        require: true,
    },
    size: {
        type: Array,
    },
    color: {
        type: Array,
        require: true,
    },
    category: {
        type: String,
    },
    fabric: {
        type: String,
    }
}, { timestamps: true })


export default mongoose.model("products", productSchema)