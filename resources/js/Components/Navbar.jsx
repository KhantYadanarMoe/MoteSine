import { useState } from "react";
import { Menu, X, ShoppingCart, ChevronDown, User, LogIn } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import axios from "axios";
import { useCart } from "@/contexts/CartContext";
import { useSetting } from "@/contexts/GeneralSettingContext";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const { user, setUser } = useAuth();
    const { cartItems } = useCart();
    const { form } = useSetting();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navigate = useNavigate();

    const logout = async () => {
        try {
            await axios.post("/api/logout", null, {
                withCredentials: true,
            });
            setUser(null);
            navigate("/login");
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    return (
        <nav className="fixed top-0 w-full z-50 font-lato bg-white shadow-md px-3 py-2 md:py-3 md:px-8">
            <div className="flex justify-between items-center">
                <button
                    className="block md:hidden mr-12 text-gray-700 focus:outline-none"
                    onClick={toggleMenu}
                >
                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                </button>

                {form.logo && (
                    <img
                        src={`/storage/${form.logo}`} // adjust if needed
                        alt="Logo"
                        className="h-auto w-[96px] md:w-[110px]"
                    />
                )}

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
                    {user?.isAdmin == 1 && (
                        <li>
                            <Link
                                to="/admin"
                                className="relative hover:text-gray-950 group"
                            >
                                Admin
                                <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-accentRed transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        </li>
                    )}
                </ul>

                <div className="hidden md:flex items-center justify-center space-x-4">
                    <Link
                        to="/checkout"
                        className="relative text-gray-800 hover:text-gray-950 group"
                    >
                        Cart ({cartItems.length})
                        <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-accentRed transition-all duration-300 group-hover:w-full"></span>
                    </Link>

                    {user ? (
                        <div className="relative">
                            <div
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className="text-gray-700 hover:text-gray-900 bg-white hover:bg-gray-100 duration-300 border-l-2 border-accentRed px-2 py-1 flex items-center space-x-2 cursor-pointer"
                            >
                                <span>{user.name}</span>
                                <ChevronDown
                                    size={16}
                                    className="text-gray-700"
                                />
                            </div>

                            {/* Dropdown Menu */}
                            {dropdownOpen && (
                                <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded shadow-lg z-50">
                                    <Link
                                        to="/user"
                                        className="block px-4 py-2 hover:bg-gray-100"
                                        onClick={() => setDropdownOpen(false)} // Close dropdown on click
                                    >
                                        Profile
                                    </Link>
                                    <button
                                        onClick={logout}
                                        className="w-full text-left px-4 py-2 hover:bg-gray-100"
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <Link to="/login">
                            <button className="text-gray-700 hover:text-gray-900 bg-white hover:bg-gray-100 duration-300 border-l-2 border-accentRed px-2 py-1 relative group">
                                Login
                            </button>
                        </Link>
                    )}
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
                            <Link
                                to="/products"
                                className="hover:text-gray-950"
                            >
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link to="/menu" className="hover:text-gray-950">
                                Menu
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/reservation"
                                className="hover:text-gray-950"
                            >
                                Reservation
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-gray-950">
                                Contact
                            </Link>
                        </li>
                        {user?.isAdmin == 1 && (
                            <li>
                                <Link
                                    to="/admin"
                                    className="hover:text-gray-950"
                                >
                                    Admin
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>

                <div className="flex md:hidden items-center justify-center space-x-3">
                    <Link
                        to="/checkout"
                        className="relative flex items-center justify-center gap-1 text-gray-800 hover:text-gray-950 group"
                    >
                        <ShoppingCart size={20} /> ({cartItems.length})
                    </Link>

                    {user ? (
                        <div className="relative">
                            <div
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className="text-gray-700 hover:text-gray-900 bg-white hover:bg-gray-100 duration-300 flex items-center  cursor-pointer"
                            >
                                <User size={20} />
                                <ChevronDown
                                    size={16}
                                    className="text-gray-700"
                                />
                            </div>

                            {/* Dropdown Menu */}
                            {dropdownOpen && (
                                <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded shadow-lg z-50">
                                    <Link
                                        to="/user"
                                        className="block px-4 py-2 hover:bg-gray-100"
                                        onClick={() => setDropdownOpen(false)} // Close dropdown on click
                                    >
                                        Profile
                                    </Link>
                                    <button
                                        onClick={logout}
                                        className="w-full text-left px-4 py-2 hover:bg-gray-100"
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <Link
                            to="/login"
                            className="flex items-center justify-center gap-1 text-gray-800 hover:text-gray-950"
                        >
                            <LogIn size={20} />
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
