import {assets} from '../assets/assets'
import { Link } from 'react-router-dom'
import { HomeIcon,BookAIcon, ImagesIcon, SearchIcon } from 'lucide-react'

function SideBar(){

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
                    <div className="flex my-2 items-center justify-center bg-base-300 rounded-lg p-2 hover:scale-105">
                        <Link to="/" className="flex items-center gap-3 w-full">
                            <HomeIcon className="size-5" />
                            <span>Home</span>
                        </Link>
                    </div>
                    <div className="flex my-2 items-center justify-center bg-base-300 rounded-lg p-2 hover:scale-105">
                        <Link to="/" className="flex items-center gap-3 w-full">
                            <SearchIcon className="size-5" />
                            <span>Search</span>
                        </Link>
                    </div>
                    <div className="flex my-2 items-center justify-center bg-base-300 rounded-lg p-2 hover:scale-105">
                        <Link to="/" className="flex items-center gap-3 w-full">
                            <ImagesIcon className="size-5" />
                            <span>Library</span>
                        </Link>
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