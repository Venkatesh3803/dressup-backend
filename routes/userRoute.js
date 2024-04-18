import express from "express"

import { deleteUser, getAllUsers, getUser, updateUser } from "../controllers/userController.js";
import { verifyToken, verifyTokenAndAuthorization, verifyTokenAndIsAdmin } from "../middelware/jwtVerification.js"

const route = express.Router();
route.patch("/:id", verifyToken, updateUser)
route.delete("/:id", verifyTokenAndAuthorization, deleteUser)
route.get("/admin/getallusers",verifyTokenAndIsAdmin, getAllUsers)
route.get("/:id",verifyToken, getUser)



export default route