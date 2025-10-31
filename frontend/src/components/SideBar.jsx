import {assets} from '../assets/assets'
import { HomeIcon , ImagesIcon, SearchIcon, BotIcon, ArrowDownIcon } from 'lucide-react'
import NavItem from './NavItem'
import DropdownItem from './DropdownItem'
import { useState } from 'react'

function SideBar(){

    const [isOpen, setIsOpen] = useState(false)

    return(
        <div className="flex flex-col p-1">
            <div className="flex border rounded-lg border-base-300">
                <div className="w-11 h-10">
                    <img src={assets.iql2} />
                </div>
                <div className="font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                    <h1>Infinity</h1>
                    <h1>Quest Labs</h1>
                </div>
            </div>
            <div className="flex flex-col my-5">
                <div className="w-full">
                    {/*Navigation*/}
                    <div className="flex flex-col my-5">
                        <NavItem to="/" icon={<HomeIcon className="size-5" />} label="Home" />
                        <NavItem to="/search" icon={<SearchIcon className="size-5" />} label="search" />
                        <div>
                            <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex items-center w-full bg-base-300 rounded-lg p-2 hover:scale-105 transition-all duration-300"
                            >
                                <div className="flex items-center gap-3">
                                    <BotIcon className="size-5" />
                                    <span>Models</span>
                                </div>
                            </button>
                            {
                                isOpen && (
                                    <div className="mt-2 flex flex-col gap-1">
                                        <DropdownItem label="Gemini AI" to="/models/gemini" />
                                        <DropdownItem label="GPT-4" to="/models/gpt4" />
                                        <DropdownItem label="DeepSeek" to="/models/deepseek" />
                                        <DropdownItem label="Claude" to="/models/claude" />
                                    </div>
                                )
                            }
                        </div>
                        <NavItem to="/" icon={<ImagesIcon className="size-5" />} label="Library" />
                    </div>
                </div>
            </div>
            <div className="flex-1 bg-base-200 border">
                <h1>Chat History</h1>
            </div>
            <div className="fixed flex items-center gap-1 m-1 bottom-0">
                <div className="w-10 h-10 rounded-full border"></div>
                <div className=" text-xs">
                    <h1>Full Name</h1>
                    <h1>
                        <div className='w-2 h-2 border bg-green-500 rounded-full inline-block mr-2'></div>
                        Online
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default SideBar