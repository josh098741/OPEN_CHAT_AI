
import ChatBot from './pages/ChatBot'
import Header from "./components/Header"
import SideBar from "./components/SideBar"
import Home from "./pages/Home"
import { Routes, Route } from 'react-router-dom'

function App(){

  return(
    <div className="flex h-screen">
      <div className="w-1/5 bg-base-200">
        <SideBar />
      </div>
      <div className="flex flex-col flex-1">
        <Header />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/chatbot" element={<ChatBot />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App