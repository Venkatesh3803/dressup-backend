import productModel from "../models/productModel.js";

export const createProduct = async (req, res) => {
    const newProduct = await productModel(req.body);

    try {
        const post = await newProduct.save();
        res.status(201).json(post)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


export const updateProduct = async (req, res) => {

    try {
        const product = await productModel.findById(req.params.id);
        if (!product) return res.status(401).json("you are not anthanticated to do that !");

        const updatedProduct = await productModel.findByIdAndUpdate(product._id, { $set: req.body }, { new: true })
        return res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


export const deleteProduct = async (req, res) => {

    try {
        const currProduct = await productModel.findById(req.params.id);
        if (!currProduct) return res.status(401).json("you are not anthanticated to do that !");

        await productModel.findByIdAndDelete(currProduct._id)
        return res.status(200).json("deleted sucessfully");
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getProduct = async (req, res) => {

    try {
        const currProduct = await productModel.findById(req.params.id);
        if (!currProduct) return res.status(401).json("product not avaliable");

        return res.status(200).json(currProduct);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


export const getAllPRoducts = async (req, res) => {
    const q = req.query;
    const limit = 40;
    const page = 1
    const filters = {
        ...(q.gender && { gender: q.gender }),
        ...(q.cat && { category: q.cat }),
        ...(q.search && { name: { $regex: q.search, $options: "i" } }),
        ...(q.color && { color: q.color }),
        ...(q.size && { size: q.size }),
        ...(q.page && { page: q.page }),
    };
    try {
        const products = await productModel.find(filters).limit(40).skip((page - 1) * limit).sort()

        return res.status(200).json({
            products,
            currentPage: page
        });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}