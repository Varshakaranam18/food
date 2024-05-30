import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config.js'
import cartRouter from "./routes/cartRoute.js";
import orderModel from "./models/orderModel.js";
import orderRouter from "./routes/orderRoute.js"

// app config
const app = express();
const port = 4000;

// middleware
app.use(cors({
    origin:["https://food-8p36.vercel.app"],
    methods:["POST","GET"],
    credentials:true
}));
app.use(express.json());




//db connection
connectDB();

//api endpoins
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)


app.get("/", (req, res) => {
    res.send("API Working");
});

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});

//mongodb+srv://varshakaranam18:Aruna75@cluster0.iqoya6p.mongodb.net/?