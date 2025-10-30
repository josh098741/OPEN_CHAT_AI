import express from 'express'
import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()
const router = express.Router()

const DEEPSEEK_API_KEY = process.env.DEEPSEEK_API_KEY
const DEEPSEEK_BASE_URL = process.env.DEEPSEEK_BASE_URL

router.post("/", async (req,res) => {
    try{
        const { message, history = [] } = req.body

        if(!message){
            return res.status(400).json({ message: "Message is required" })
        }

        const messages = [
            {role: "system", content: "You are a helpful AI assistant"},
            ...history,
            {role: "user", content: message}
        ]

        const response = await axios.post(
            `${DEEPSEEK_BASE_URL}/chat/completions`,
            {
                model: "deepseek-chat-v3",
                messages,
                temperature: 0.7
            },
            {
                headers: {
                    Authorization: `Bearer ${DEEPSEEK_API_KEY}`,
                    "content-type": "application/json"
                }
            }
        )
        const reply = response.data.choices[0].message.content
        res.status(200).json({ reply })
    }catch(error){
        console.log("Deep seek api error:", error.response?.data || error.message)
        res.status(500).json({ error: "Failed to generate AI response" })
    }
})

export default router