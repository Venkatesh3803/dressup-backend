import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    products: {
        type: [],
        required: true,
    },

    address: {
        type: String
    },
    house_no: {
        type: String
    },
    city: {
        type: String
    },
    province: {
        type: String
    },
    pincode: {
        type: String
    },

    totalPrice: {
        type: String,
        required: true,
    },
    phonenumber: {
        type: String,
        required: true
    },
    paymentType: {
        type: String,
        // required: true
    },
    status: {
        type: String,
        default: "processing"
    }

}, { timestamps: true })


export default mongoose.model("orders", orderSchema)