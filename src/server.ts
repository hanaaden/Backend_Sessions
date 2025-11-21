import express ,{Request , Response, type Application}from "express";
import { pool } from "./database/db";
import dotenv from "dotenv";
dotenv.config();

const app:Application = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Home Page');
});

(async ()=>{
    try {
        const client = await pool.connect();

    } catch{

    }
})



export default app;