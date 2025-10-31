import { Link } from "react-router-dom"




function DropdownItem({ label,to }){

    return(
        <Link
        to={to}
        className="text-sm text-left px-3 py-1 hover:bg-base-300 rounded-lg transition-all duration-300"
        >
            {label}
        </Link>
    )
}

export default DropdownItem