import userModel from "../models/userModel.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"



export const registerUser = async (req, res) => {
    const salt = await bcrypt.genSalt(10)
    const hashPass = bcrypt.hashSync(req.body.password, salt)
    req.body.password = hashPass;
    const newUser = userModel(req.body)
    try {
        const existUser = await userModel.findOne({ username: newUser.username })
        if (existUser) return res.status(404).json("this email already exist")
        const user = await newUser.save();
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


export const loginUser = async (req, res) => {
    try {
        const currentUser = await userModel.findOne({ username: req.body.username })
        if (!currentUser) return res.status(404).json("this user does not exist ");

        const validity = bcrypt.compareSync(req.body.password, currentUser.password);
        if (!validity) return res.status(404).json("invalid Credential ");

        const { password, ...info } = currentUser._doc;



        const token = jwt.sign({
            id: currentUser._id, isAdmin: currentUser.isAdmin,
        }, process.env.ACCESS_TOKEN, { expiresIn: "24h" })


        const refreshToken = jwt.sign({
            id: currentUser._id, isAdmin: currentUser.isAdmin,
        }, process.env.ACCESS_TOKEN, { expiresIn: "1d" })



        res.cookie("accesToken", token, { httpOnly: true, secure: true, })
        res.status(200).json({ ...info, token, refreshToken })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}