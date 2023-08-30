import userModel from "../models/userModel.js"

export const updateUser = async (req, res) => {

    try {
        const user = await userModel.findById(req.params.id);
        if (!user) return res.status(401).json("you can only update you's profile");

        const updatedUser = await userModel.findByIdAndUpdate(user._id, { $set: req.body }, { new: true })
        return res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


export const deleteUser = async (req, res) => {

    try {
        const currentUser = await userModel.findById(req.params.id);
        if (!currentUser) return res.status(401).json("you can only update you's profile");

        await userModel.findByIdAndDelete(currentUser._id)
        return res.status(200).json("deleted sucessfully");
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getUser = async (req, res) => {

    try {
        const currentUser = await userModel.findById(req.params.id);
        if (!currentUser) return res.status(401).json("you are not authanticated");

        const { password, ...others } = currentUser._doc
        
        return res.status(200).json(others);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


export const getAllUsers = async (req, res) => {

    try {
        const user = await userModel.find()
      
        return res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}