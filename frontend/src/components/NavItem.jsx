import { Link } from "react-router-dom";



function NavItem({ to, icon, label }){

    return(
        <div className="flex my-2 items-center justify-center bg-base-300 rounded-lg p-2 hover:scale-105 transition-all duration-300">
            <Link
            to={to}
            className="flex items-center gap-3 w-full"
            >
                {icon}
                <spaan>{label}</spaan>
            </Link>
        </div>
        
    )
}

export default NavItem