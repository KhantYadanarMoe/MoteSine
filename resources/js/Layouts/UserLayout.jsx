import { Outlet } from "react-router-dom";
import Profile from "../../images/Profile.jpg";
import Logo from "../../images/logo.png";
import {
    UserRound,
    Heart,
    Salad,
    HandPlatter,
    LogOut,
    Menu,
    X,
    ChevronDown,
} from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function UserLayout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    return (
        <div className="lg:flex gap-3">
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
                className="w-full lg:w-[28%] bg-gray-50 shadow-md lg:fixed lg:flex lg:flex-col lg:h-screen"
            >
                <div className="py-8 hidden lg:flex flex-col justify-between h-screen">
                    <div className="flex items-center gap-2 justify-center">
                        <img
                            src={Profile}
                            alt="User Profile"
                            className="h-20 w-20 object-cover rounded-full border-2 border-red-600"
                        />
                        <div>
                            <h2 className="text-lg font-medium">
                                Khant Yadanar Moe
                            </h2>
                            <p className="text-gray-700 text-xs">NYC, USA</p>
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
                    <a
                        href=""
                        className="bg-red-600 hover:bg-red-800 duration-300 text-white justify-center mx-3 py-3 rounded-md flex gap-1"
                    >
                        <LogOut size={20} /> Logout
                    </a>
                </div>

                <nav className="lg:hidden flex justify-between w-full px-4 py-2 shadow-lg">
                    <button
                        onClick={() => setIsSidebarOpen(true)}
                        className="mr-4 text-gray-700 focus:outline-none"
                    >
                        <Menu size={20} />
                    </button>

                    <img
                        src={Logo}
                        alt=""
                        className="h-auto w-[96px] md:w-[110px]"
                    />

                    <DropdownMenu>
                        <DropdownMenuTrigger className="flex gap-1 items-center">
                            <ChevronDown size={16} />
                            Khant
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="mr-3">
                            <DropdownMenuLabel className="font-normal">
                                Logout
                            </DropdownMenuLabel>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </nav>

                {isSidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                        onClick={() => setIsSidebarOpen(false)}
                    ></div>
                )}

                <div
                    className={`fixed top-0 left-0 w-[75%] sm:w-[50%] bg-gray-50 shadow-md h-full flex flex-col justify-between z-50 transform transition-transform duration-300 ${
                        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
                >
                    <button
                        onClick={() => setIsSidebarOpen(false)}
                        className="absolute top-4 right-4 text-gray-700"
                    >
                        <X />
                    </button>

                    <ul className="my-20">
                        <li className="ml-1 px-4 py-5 my-1 text-black hover:text-red-500 hover:bg-white border-l-2 border-l-gray-50 hover:border-l-red-500 duration-300">
                            <Link to="/user" className="flex gap-1 ">
                                <UserRound size={20} /> Profile
                            </Link>
                        </li>
                        <li className="ml-1 px-4 py-5 my-1 text-black hover:text-red-500 hover:bg-white border-l-2 border-l-gray-50 hover:border-l-red-500 duration-300">
                            <Link to="/user/favorite" className="flex gap-1 ">
                                <Heart size={20} /> Favorite
                            </Link>
                        </li>
                        <li className="ml-1 px-4 py-5 my-1 text-black hover:text-red-500 hover:bg-white border-l-2 border-l-gray-50 hover:border-l-red-500 duration-300">
                            <Link to="/user/orders" className="flex gap-1 ">
                                <Salad size={20} /> Orders
                            </Link>
                        </li>
                        <li className="ml-1 px-4 py-5 my-1 text-black hover:text-red-500 hover:bg-white border-l-2 border-l-gray-50 hover:border-l-red-500 duration-300">
                            <Link
                                to="/user/reservations"
                                className="flex gap-1 "
                            >
                                <HandPlatter size={20} /> Reservations
                            </Link>
                        </li>
                    </ul>
                </div>
            </motion.div>
            <Outlet />
        </div>
    );
}
