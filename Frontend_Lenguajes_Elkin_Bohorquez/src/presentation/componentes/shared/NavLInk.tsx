import { Link } from "react-router";

interface Props {
    icon?: React.ReactNode;   // signo ? es porque es opcional
    text: string;
    active? : boolean;
    to: string;
}

export const NavLink = ({icon, text, active = false, to} : Props) => {

    return(
            <Link 
            to={to} 
            className={`flex items-center px-3 py-2 text-sm font-LexendDeca-Medium
            ${active ? "bg-blue-700 text-white" : "text-blue-100 hover:bg-blue-700"}`}>
            
            {icon && (
            <span className="mr-2">{icon}</span>
            )}

            {text}
            </Link> 
    );
}