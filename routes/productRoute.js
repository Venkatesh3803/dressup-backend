import express from "express"

import { verifyTokenAndIsAdmin } from "../middelware/jwtVerification.js"
import { createProduct, deleteProduct, getAllPRoducts, getProduct, updateProduct } from "../controllers/productController..js";

const route = express.Router();
route.post("/", verifyTokenAndIsAdmin, createProduct)
route.put("/:id", verifyTokenAndIsAdmin, updateProduct)
route.delete("/:id", verifyTokenAndIsAdmin, deleteProduct)
route.get("/single/:id", getProduct)
route.get("/", getAllPRoducts)



export default route