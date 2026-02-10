import dotenv from "dotenv"
dotenv.config()

import express from "express"
import pool from "./config/db"
import AddTask from "./routes/addTask"
import DeleteTask from "./routes/deleteTask"
import  GetAllTask  from "./routes/getAllTask"
import UpdatesTask from "./routes/UpdateTask"

const app = express()

app.use(express.json())
const PORT =3131;

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
app.use("/getall" , GetAllTask )
app.use("/update" , UpdatesTask )
app.listen(PORT , ()=>{
    console.log("app is running")
})