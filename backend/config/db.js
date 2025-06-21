import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://stjosephbakes:Stjosephbakes2022@cluster0.ku9jk.mongodb.net/food-del').then(()=>console.log("DB Connected"));


}