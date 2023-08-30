import express from "express"

import { verifyTokenAndAuthorization, verifyTokenAndIsAdmin } from "../middelware/jwtVerification.js"
import { createOrder, deleteOrder, getAllOrder, getOrder, updateOrder } from "../controllers/orderController.js";

const route = express.Router();
route.post("/", verifyTokenAndAuthorization, createOrder)
route.put("/:id", verifyTokenAndAuthorization, updateOrder)
route.delete("/:id", verifyTokenAndAuthorization, deleteOrder)
route.get("/single/:id",verifyTokenAndAuthorization, getOrder)
route.get("/",verifyTokenAndIsAdmin, getAllOrder)




export default route