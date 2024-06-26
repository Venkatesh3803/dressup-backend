import orderModel from "../models/orderModel.js";

export const createOrder = async (req, res) => {
    const newOrder = orderModel(req.body);
    try {
        await newOrder.save()
        return res.status(200).json("orders Sucessfully")
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


export const updateOrder = async (req, res) => {

    try {
        const order = await orderModel.findById(req.params.id);
        if (!order) return res.status(401).json("you can only update you's profile");

        await orderModel.findByIdAndUpdate(order._id, { $set: req.body }, { new: true })
        return res.status(200).json("updated");
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


export const deleteOrder = async (req, res) => {

    try {
        const currOrder = await orderModel.findById(req.params.id);
        if (!currOrder) return res.status(401).json("you can only update you's profile");

        await orderModel.findByIdAndDelete(currOrder._id)
        return res.status(200).json("deleted sucessfully");
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getOrder = async (req, res) => {
    const id = req.params.id;
    try {
        if (req.user.id !== id) return req.status(403).json("Something Went Wrong")
        const currOrder = await orderModel.find({ userId: id }).sort({ createdAt: -1 });
        if (!currOrder) return res.status(401).json("orders not Avaliable");

        return res.status(200).json(currOrder);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


export const getAllOrder = async (req, res) => {

    try {
        const orders = await orderModel.find().sort({ createdAt: -1 })
        return res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}