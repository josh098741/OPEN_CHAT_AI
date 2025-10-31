import React,{useState} from 'react'
import axios from "axios"

function Home(){

    const [messages, setMessages] = useState([])
    const [input, setInput] = useState("")
    const [loading, setLoading] = useState(false)

    const sendMessage = async () => {
        if(!input.trim()) return;

        const newMsg = { role: "user", content: input }
        const newMessages = [...messages, newMsg]
        setMessages(newMessages)
        setInput("")
        setLoading(true)

        try{
            const res = await axios.post("http://localhost:5000/api/chat",{
                message: input,
                history: messages
            })
            const aiReply = { role: "assistant", content: res.data.reply }
            setMessages([...newMessages, aiReply])
        }catch(error){
            console.error(error)
            alert("Error: Unable to get response")
        }finally{
            setLoading(false)
        }
    }

    return(
        <div className="flex flex-col items-center min-h-screen">
            <h1 className="text-3xl font-bold mb-4">DeepSeek AI Chat</h1>
            <div className="w-full max-w-3xl bg-base-300 rounded-lg shadow-lg p-4 flex flex-col gap-3 h-[70vh] overflow-y-auto">
                {
                    messages.map((msg, i) => (
                        <div key={i} className={`p-3 rounded-lg ${msg.role === "user" ? "bg-blue-100 self-end" : "bg-gray-200 self-start"}`}>
                            <strong>{msg.role === "user" ? "You: " : "AI: "}</strong>
                            {msg.content}
                        </div>
                    ))
                }
                {
                    loading && (
                        <div>AI is Loading...</div>
                    )
                }
            </div>
            <div className="flex mt-4 w-full max-w-3xl gap-3">
                <input
                    type="text"
                    className="input input-bordered w-3/4"
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                    onKeyDown={(event) => event.key === "Enter" && sendMessage()}
                />
                <button
                    className="btn btn-primary w-1/4"
                    onClick={sendMessage}
                    disabled={loading}
                >Send</button>
            </div>
        </div>
    )
}

export default Home