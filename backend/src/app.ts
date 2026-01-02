import express from "express";
import authRoutes from "./routes/auth";
import cors from "cors";
import { corsOptions } from "./config/CorsConfig";

const app = express();

app.use(express.json());
app.use(cors(corsOptions));
app.use("/auth", authRoutes);

export default app;
