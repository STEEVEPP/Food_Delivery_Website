import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('<Mongodb Connection URL>').then(()=>console.log("DB Connected"));


}
