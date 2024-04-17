import express from "express"

import { verifyToken, verifyTokenAndAuthorization, verifyTokenAndIsAdmin } from "../middelware/jwtVerification.js"
import { createOrder, deleteOrder, getAllOrder, getOrder, updateOrder } from "../controllers/orderController.js";

const route = express.Router();
route.post("/", verifyTokenAndAuthorization, createOrder)
route.patch("/:id", verifyTokenAndAuthorization, updateOrder)
route.delete("/:id", verifyTokenAndAuthorization, deleteOrder)
route.get("/single/:id",verifyToken, getOrder)
route.get("/",verifyTokenAndIsAdmin, getAllOrder)




export default route