import dotenv from "dotenv"
dotenv.config()

import express from "express"
import pool from "./config/db"
import AddTask from "./routes/addTask"


const app = express()

app.use(express.json())
const PORT =3131

app.get("/" , (req ,res)=>{
    res.send("this is running")
})

app.use("addtask" , AddTask)
app.listen(PORT , ()=>{
    console.log("app is running")
})