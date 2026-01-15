import dotenv from "dotenv"
dotenv.config()
import express from "express"
import pool from "./config/db"
import addGameRouter from "./routes/insertgames.route"
import Deletegame from "./routes/deletegame.routes"



const app  = express()

app.use(express.json())
const PORT = 3131;

(async ()=>{
try{
await pool.query("SELECT 1");
console.log("Database connected")
}catch{
console.log("database failed to connected");
process.exit(1)
}
})();
app.get("/" ,(req , res)=>{
    res.send("this is running")
})
app.use("/addgames" , addGameRouter)
app.use("/delete" ,  Deletegame)

app.listen(PORT , ()=>{
    console.log("app is listening on port" , PORT)
})
