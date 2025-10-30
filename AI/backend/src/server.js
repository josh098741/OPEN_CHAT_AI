import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()
const app = express()


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