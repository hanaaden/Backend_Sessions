import express , {Request , Response} from 'express'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

const PORT = 3000

app.listen(PORT , ()=>{console.log(`the server is running on ${PORT}`)})
