import mongoose from "mongoose";

export const connectDB = async() =>{
    await mongoose.connect('mongodb+srv://varshakaranam18:Aruna75@cluster0.iqoya6p.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}