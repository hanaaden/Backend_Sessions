import express , {Request , Response} from 'express'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 5000
app.use(cors())
app.use(express.json())

let notes = [
  {
    id: "1",
    body: "HTTP",
    topic: "Backend",
  },
  {
    id: "2",
    body: "Routes",
    topic: "Backend",
  },
  {
    id: "3",
    body: "Ser and Deser",
    topic: "Backend",
  },
 
];

app.get("/courses" , (req : Request , res : Response)=>{
    res.status(200).send(notes)
})

app.get("/courses/:id" , (req : Request , res :Response)=>{
    const id = req.params.id
    const course = notes.find(note => note.id === id)
    res.status(200).send(course)
})
app.delete("/courses/:id" , (req :Request , res : Response)=>{
    const id = req.params.id
    notes = notes.filter(note => note.id !== id)
    res.status(204).end();
})
app.listen(PORT , ()=>{console.log(`the port is running at ${PORT}`)})
