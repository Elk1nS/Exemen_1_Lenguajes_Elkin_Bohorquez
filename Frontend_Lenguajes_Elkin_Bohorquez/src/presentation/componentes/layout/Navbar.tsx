import { Globe, Home, Menu, UserCheck2, Users, } from "lucide-react";
import { NavLink } from "../shared/NavLInk";
import { useState } from "react";
import { MobileNaveLink } from "../shared/MobileNaveLink";
import { Outlet, useLocation } from "react-router";

export const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const location = useLocation();

    const toggleMenu = () => {
        
        setIsMenuOpen(!isMenuOpen)
    }

    const isActive = (path: string) => {
        if(path == '/') {
            return location.pathname === '/'
        }

        return location.pathname.startsWith(path)

    }

    return (

        <>
        <nav className="bg-blue-600 text-white shadow-md">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between h-16">
                    {/* Logo y titulo */}
                    <div className="flex items-center">
                        <span className="font-LexendDeca-Bold text-xl">
                            Gestion de Personas
                        </span>
                    </div>
                    {/* Navegacion en escritorio */}
                    <div className="hidden md:flex">
                        <NavLink to="/" active={isActive("/")} text="Inicio" icon={<Home size={18} />} />
                        <NavLink to="/countries" active={isActive("/countries")} text="Paises" icon={<Globe size={18} />} />
                        <NavLink to="/persons" active={isActive("/persons")} text="Personas" icon={<Users size={18}/>} />
                        <NavLink to="/roles" active={isActive("/roles")} text="Roles" icon={<UserCheck2 size={18}/>} />
                    </div>
                    {/* Boton de menu movil */}
                    <div className="md:hidden flex items-center">
                        <button
                        onClick={toggleMenu}
                            className="text-white hover:text-blue-200 focus:outline-none"
                        >
                            <Menu size={24} />
                        </button>

                    </div>
                </div>
            </div>

            {/* Menu movil */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <MobileNaveLink to="/" active={isActive("/")} icon={<Home size={18} />} text="Inicio" />
                    <MobileNaveLink to="/countries" active={isActive("/countries")} icon={<Globe size={18} />} text="Paises" />
                    <MobileNaveLink to="/persons" active={isActive("/persons")} icon={<Users size={18} />} text="Personas" />
                    <MobileNaveLink to="/roles" active={isActive("/roles")} icon={<UserCheck2 size={18} />} text="Roles" />
                    </div>
                </div>
            )}



        </nav>

        {/* Principal content */}
        <div className="min-h-screen bg-gray-100 mx-auto p-4 mt-4">
            <Outlet />
        </div>
        </>

        
    );
}