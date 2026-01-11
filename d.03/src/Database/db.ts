import { Pool } from "pg";
import dotenv from "dotenv";
dotenv.config();


export const pool = new Pool({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
    database:process.env.DB_NAME,
    port:Number(process.env.DB_HOST),
    ssl:{
        rejectUnauthorized:false,
    }
})

pool .connect().then(()=>
    console.log("Database connected"))
.catch((err)=> console.error("db error",err))