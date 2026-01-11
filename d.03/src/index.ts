import app from './server'
import dotenv from 'dotenv'
dotenv.config()
const PORT = 3131
app.listen(PORT , ()=>{console.log(`app is listening at ${process.env.FRONTEND_URL}`)})