import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    username: {
        type: String,
        unique: true,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    country: {
        type: String,
    },
    profilePic: {
        type: String,
    },
    dob: {
        type: String,
    },

}, { timestamps: true })


export default mongoose.model("user", userSchema)