import connectDB from "./config/db.js";
import router from "./routes/router.js";
import express from "express";
import dotenv from "dotenv";

connectDB();

dotenv.config();

const app = express();

app.use("/api", router);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  () => {
    console.log(`App is running in ${process.env.NODE_ENV} mode on port ${PORT}`)
  }
);
