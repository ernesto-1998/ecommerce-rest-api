import express from "express";
import dbConnect from "./config/db.js";
import authRouter from "./routes/auth.js";

dbConnect();

const app = express();

app.use(express.json());
app.use("/api", authRouter)

export default app;
