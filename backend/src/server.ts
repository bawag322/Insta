import express, { Express, Request, Response } from "express";
import connectDatabase from "./database";
import cors from "cors";
import dotenv from "dotenv";
import victimRoutes from "./routes/Victim";

dotenv.config();

const app: Express = express();
const PORT: string | number = process.env.PORT || 8080;

const corsOptions = {
    origin: process.env.CLIENT_URL || "http://localhost:5173",
}

// Middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", victimRoutes);

app.listen(PORT, () => console.warn("[Server] started at port: " + PORT));
connectDatabase();