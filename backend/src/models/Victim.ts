import mongoose, { Schema } from "mongoose";

const VictimSchema: Schema = new mongoose.Schema({
    username: String,
    password: String
}, { timestamps: true });

const Victims = mongoose.model("Victims", VictimSchema);
export default Victims;