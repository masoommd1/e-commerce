import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`);
        console.log('db connected')
    } catch (error) {
        console.error(error);
    }
}

export default connectDB;