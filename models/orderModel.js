import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    products: {
        type: [],
        require: true,
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
        require: true,
    },
    phonenumber: {
        type: String,
        require: true
    },
    paymentType: {
        type: String,
        // require: true
    },
    status: {
        type: String,
        default: "processing"
    }

}, { timestamps: true })


export default mongoose.model("orders", orderSchema)