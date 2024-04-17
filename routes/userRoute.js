import express from "express"

import { deleteUser, getAllUsers, getUser, updateUser } from "../controllers/userController.js";
import { verifyTokenAndAuthorization, verifyTokenAndIsAdmin } from "../middelware/jwtVerification.js"

const route = express.Router();
route.patch("/:id", verifyTokenAndAuthorization, updateUser)
route.delete("/:id", verifyTokenAndAuthorization, deleteUser)
route.get("/admin/getallusers",verifyTokenAndIsAdmin, getAllUsers)
route.get("/:id", getUser)



export default route