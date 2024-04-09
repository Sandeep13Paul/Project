import mongoose from "mongoose";
export const DB_NAME = "DATA";

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n Mongoose connected!! DB Host: ${connection.connection.host}`);
    } catch (error) {
        console.log("Mongo db connection error" , error);
        process.exit(1);
    }
}

export default connectDB;