import React,{useState} from 'react'
import axios from "axios"

function ChatBot(){

    const [input, setInput] = useState("")
    const [chat, setChat] = useState([])
    const [loading, setLoading] = useState(false)

    const sendMessage = async () => {
        if(!input.trim()) return
        const userMessage = { role: "user", text: input }
        setChat((prev) => [...prev, userMessage])
        setInput("")
        setLoading(true)

        try{
            const response = await axios.post("http://localhost:5000/api/chat", {
                message: input
            })

            const botMessage = {
                role: "bot",
                text: response.data.reply
            }

            setChat((prev) => [...prev, botMessage])

        }catch(error){
            setChat((prev) => [
                ...prev, {role: "bot", text: "Error could not connect to gemini API"}
            ])
            console.log("Error: ", error)
        }finally{
            setLoading(false)
        }
    }
    

    return(
        <div className="flex flex-col items-center p-5">
            <h1 className='text-2xl font-bold mb-4 text-center'>Gemini Chat Bot</h1>
            <div className='w-full max-w-3xl rounded-lg shadow-lg p-4 flex flex-col gap-3 h-[70vh] overflow-y-auto bg-base-200'>
                {
                    chat.map((msg, i) => (
                        <div key={i} className={`p-3 rounded-lg ${msg.role === "user" ? "bg-blue-500 self-end text-base-300": "bg-gray-200 self-start text-base-300"}`}>
                            <strong>{msg.role === "user" ? "You: " : "Gemini: "}</strong>
                            {msg.text}
                        </div>
                    ))
                }
                {
                    loading && (
                        <div className="border">Gemini is Loading</div>
                    )
                }
            </div>
            <div className="flex w-full gap-3 max-w-3xl mt-4">
                <input 
                value={input}
                onChange={(event) => setInput(event.target.value)}
                type="text"
                onKeyDown={(event) => event.key === "Enter" && sendMessage()}
                className="input w-3/4 bg-base-300 outline-none"
                />
                <button
                className="w-1/4 btn bg-base-300"
                onClick={sendMessage}
                disabled={loading}
                >
                    {loading ? "Sending..." : "Submit"}
                </button>
            </div>
        </div>
    )
}

export default ChatBot