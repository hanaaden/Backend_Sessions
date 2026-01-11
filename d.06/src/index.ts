import express  from "express";
import { Application } from "express";
import gamesRouter from "./routes/gamesRouter"

const app :Application = express()
const PORT = 3131

app.use(express.json())

app.get("/" , (req , res)=>{
    res.send("Home page")
})

app.use("/games" , gamesRouter )
app.use("/find" , gamesRouter)

app.listen(PORT , ()=>{
console.log("the server is running at port " , PORT)
})