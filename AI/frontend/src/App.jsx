import { useState } from "react";
import axios from "axios";

function App() {
  const [input, setInput] = useState("");
  const [chat, setChat] = useState([]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg = { role: "user", text: input };
    setChat([...chat, userMsg]);

    try {
      const res = await axios.post("http://localhost:5000/api/chat", { message: input });
      const botMsg = { role: "bot", text: res.data.reply };
      setChat((prev) => [...prev, botMsg]);
    } catch (err) {
      setChat((prev) => [...prev, { role: "bot", text: "Error: Could not connect to Gemini API" }]);
    }

    setInput("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Gemini Chatbot 🤖</h2>
      <div style={{ height: "400px", overflowY: "auto", border: "1px solid gray", padding: "10px" }}>
        {chat.map((msg, i) => (
          <div key={i} style={{ textAlign: msg.role === "user" ? "right" : "left" }}>
            <p><strong>{msg.role}:</strong> {msg.text}</p>
          </div>
        ))}
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        placeholder="Type your message..."
        style={{ width: "80%", marginTop: "10px" }}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default App;