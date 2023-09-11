import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors"
import authRoute from "./routes/authRoute.js"
import userRoute from "./routes/userRoute.js"
import productRoute from "./routes/productRoute.js"
import orderRoute from "./routes/orderRoute.js"
// import redisClient from "./redis server/redis.js";



// configarations
const app = express();
app.use(cors())
dotenv.config();
app.use(express.json());
app.use(cookieParser())

const connect = () => {
    try {
        mongoose.connect(process.env.MONGO).then(() => console.log('Connected!'));
    } catch (error) {
        console.log(error)
    }
}


app.get("/", (req, res) => {
    res.send("DressUp Backend")
})

app.listen(5000, async () => {
    // await redisClient.connect();
    connect();
    console.log("listen at port 5000")
})


// routes


app.use("/api/auth", authRoute)
app.use("/api/user", userRoute)
app.use("/api/product", productRoute)
app.use("/api/order", orderRoute)