import Profile from "../../../images/Profile.jpg";
import {
    UserRound,
    Heart,
    Salad,
    HandPlatter,
    LogOut,
    Menu,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/Components/ui/button";
import axios from "axios";

export default function UserSidebar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const { user, setUser } = useAuth();
    const { cartItems } = useCart();

    const logout = async () => {
        try {
            await axios.post("/api/logout", null, {
                withCredentials: true,
            });
            setUser(null);
            // navigate("/login");
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    return (
        <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeIn" }}
            className="flex gap-3"
        >
            <div
                className={`w-[80%] md:w-[50%] lg:w-[32%] xl:w-[26%] bg-lightBackground  flex flex-col h-screen fixed top-0 transition-all duration-300 z-50 ${
                    isSidebarOpen ? "left-0" : "-left-[100%]"
                } lg:left-0 z-50`}
            >
                <div className="py-8 flex flex-col justify-between h-screen">
                    <div className="flex items-center gap-2 justify-center">
                        <img
                            src={
                                user?.image ? `/storage/${user.image}` : Profile
                            }
                            alt="User Profile"
                            className="h-20 w-20 object-cover rounded-full border-2 border-red-600"
                        />
                        <div>
                            <h2 className="text-lg font-medium">{user.name}</h2>
                            <p className="text-gray-700 text-xs">
                                {user.address}
                            </p>
                        </div>
                    </div>
                    <ul>
                        <li className="ml-1 px-8 py-4 my-1 text-black hover:text-red-500 hover:bg-white border-l-2 border-l-gray-50 hover:border-l-red-500 duration-300">
                            <Link to="/user" className="flex gap-1 ">
                                <UserRound size={20} /> Profile
                            </Link>
                        </li>
                        <li className="ml-1 px-8 py-4 my-1 text-black hover:text-red-500 hover:bg-white border-l-2 border-l-gray-50 hover:border-l-red-500 duration-300">
                            <Link to="/user/liked" className="flex gap-1 ">
                                <Heart size={20} /> Favorite
                            </Link>
                        </li>
                        <li className="ml-1 px-8 py-4 my-1 text-black hover:text-red-500 hover:bg-white border-l-2 border-l-gray-50 hover:border-l-red-500 duration-300">
                            <Link to="/user/orders" className="flex gap-1 ">
                                <Salad size={20} /> Orders
                            </Link>
                        </li>
                        <li className="ml-1 px-8 py-4 my-1 text-black hover:text-red-500 hover:bg-white border-l-2 border-l-gray-50 hover:border-l-red-500 duration-300">
                            <Link
                                to="/user/reservations"
                                className="flex gap-1 "
                            >
                                <HandPlatter size={20} /> Reservations
                            </Link>
                        </li>
                    </ul>
                    <Button
                        onClick={logout}
                        className="bg-red-600 hover:bg-red-800 duration-300 text-white justify-center mx-3 py-3 rounded-md flex gap-1"
                    >
                        <LogOut size={20} /> Logout
                    </Button>
                </div>
            </div>

            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-40lg:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                ></div>
            )}

            <nav className="bg-lightBackground px-4 lg:px-6 lg:w-[68%] xl:w-[74%] fixed top-0 py-5 md:py-7 w-full lg:ml-[32%] xl:ml-[26%] flex items-center justify-between shadow-md xl:shadow-none z-40">
                <div className="flex">
                    <button
                        onClick={() => setIsSidebarOpen(true)}
                        className="lg:hidden mr-2 text-gray-700 focus:outline-none"
                    >
                        <Menu size={20} />
                    </button>
                    <p className="text-accentRed font-medium text-lg">
                        WELCOME!
                    </p>
                </div>
                <div className="flex gap-3 md:gap-4 items-center">
                    <Link
                        to="/checkout"
                        className="relative text-gray-800 hover:text-gray-950 group"
                    >
                        Cart ({cartItems.length})
                        <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-accentRed transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link to="/">
                        <button className="text-gray-700 hover:text-gray-900 bg-lightBackground hover:bg-gray-100 duration-300 border-l-2 border-accentRed px-2 py-1 relative group">
                            Home
                        </button>
                    </Link>
                </div>
            </nav>
        </motion.div>
    );
}
