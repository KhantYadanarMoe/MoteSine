import { useState } from "react";
import { Menu, X, ShoppingBag, LogIn } from "lucide-react";
import Logo from "../../images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="font-lato bg-white shadow-md px-3 py-2 md:py-3 md:px-8">
            <div className="flex justify-between items-center">
                <button
                    className="block md:hidden mr-4 text-gray-700 focus:outline-none"
                    onClick={toggleMenu}
                >
                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                </button>

                <img
                    src={Logo}
                    alt=""
                    className="h-auto w-[96px] md:w-[110px]"
                />

                <ul className="hidden md:flex space-x-6 text-gray-800">
                    <li>
                        <Link
                            to="/"
                            className="relative hover:text-gray-950 group"
                        >
                            Home
                            <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-accentRed transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/products"
                            className="relative hover:text-gray-950 group"
                        >
                            Products
                            <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-accentRed transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/menu"
                            className="relative hover:text-gray-950 group"
                        >
                            Menu
                            <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-accentRed transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/reservation"
                            className="relative hover:text-gray-950 group"
                        >
                            Reservation
                            <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-accentRed transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            className="relative hover:text-gray-950 group"
                        >
                            Contact
                            <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-accentRed transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </li>
                </ul>

                <div className="hidden md:flex items-center justify-center space-x-4">
                    <Link
                        to="/checkout"
                        className="relative text-gray-800 hover:text-gray-950 group"
                    >
                        Cart (0)
                        <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-accentRed transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link to="/login">
                        <button className="text-gray-700 hover:text-gray-900 bg-white hover:bg-gray-100 duration-300 border-l-2 border-accentRed px-2 py-1 relative group">
                            Login
                        </button>
                    </Link>
                </div>

                <div className="flex space-x-2 md:hidden text-gray-700 focus:outline-none">
                    <a href="#" className="relative">
                        <ShoppingBag size={20} />
                        <span className="absolute bottom-[-7px] right-[-6px] w-4 h-4 bg-accentRed text-white text-xs flex items-center justify-center rounded-full">
                            0
                        </span>
                    </a>
                    <a href="#">
                        <LogIn size={20} />
                    </a>
                </div>
            </div>

            {/* Mobile NavLinks */}
            <div
                className={`fixed top-0 left-0 w-3/4 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <button
                    className="absolute top-4 right-4 text-gray-700 focus:outline-none"
                    onClick={toggleMenu}
                >
                    <X size={24} />
                </button>
                <ul className="mt-16 flex flex-col space-y-6 px-6 text-gray-900">
                    <li>
                        <Link to="/" className="hover:text-gray-950">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/products" className="hover:text-gray-950">
                            Products
                        </Link>
                    </li>
                    <li>
                        <Link to="/menu" className="hover:text-gray-950">
                            Menu
                        </Link>
                    </li>
                    <li>
                        <Link to="/reservation" className="hover:text-gray-950">
                            Reservation
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="hover:text-gray-950">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
