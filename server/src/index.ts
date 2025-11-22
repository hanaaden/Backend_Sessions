import express from "express";
import dotenv from 'dotenv';
dotenv.config();

import { pool, connectToDatabase } from "./database/db";
import AuthRoutes from "./routes/authRoutes"


console.log(" DB url loaded?", process.env.DATABASE_URL ? "yes" : "no");


const app = express();

const PORT = 3131;

connectToDatabase();

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Home Page');
});

app.use("/auth" , AuthRoutes)

app.listen(PORT, () => {
  console.log(`App is listening at http://localhost:3131`);
});