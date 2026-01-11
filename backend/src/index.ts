import dotenv from "dotenv";
dotenv.config();
import pool from "./config/db"
import express from "express";
import { Application } from "express";
import GameRouter from "./routes/addGame.router"

const app: Application = express();
const PORT = 3131;

app.use(express.json());

(async () => {
  try {
    await pool.query("SELECT 1");
    console.log("✅ Database connected");
  } catch (error) {
    console.error("❌ Database connection failed", error);
    process.exit(1);
  }
})();

app.get("/", (req, res) => {
  res.send("Home page");
});

app.use("/games",GameRouter);


app.listen(PORT, () => {
  console.log("the server is running at port ", PORT);
});
