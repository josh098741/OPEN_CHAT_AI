import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import chatRoutes from './routes/chat.routes.js'

dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())

app.use("/api/chat", chatRoutes)

const PORT = process.env.PORT
const start = async () => {
    try{
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`)
        })
    }catch(error){
        console.log("Error in starting server")
    }
}

start()