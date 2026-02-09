import dotenv from "dotenv"
dotenv.config()

import express from "express"
import pool from "./config/db"
import AddTask from "./routes/addTask"
import DeleteTask from "./routes/deleteTask"


const app = express()

app.use(express.json())
const PORT =3131

app.get("/" , (req ,res)=>{
    res.send("this is running")
});

(async ()=>{
    try {
        await pool.query("SELECT 1");
        console.log("database connected")
    } catch (error) {
        console.log("database failed to connect")
        process.exit(1)

    }
})();

app.use("/addtask" , AddTask)
app.use("/delete" , DeleteTask )
app.listen(PORT , ()=>{
    console.log("app is running")
})