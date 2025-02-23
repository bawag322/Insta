import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/mydatabase";

const connectDatabase = async () => {
    try{
        await mongoose.connect(uri);
        console.warn("[Database] connected");
    }catch (e){
        console.error(e);
    }
}

export default connectDatabase;