import { Search, ArrowUpWideNarrow, ArrowDownWideNarrow } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "../ui/input";

export default function MenuHeader() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);
    return (
        <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
        >
            <div className="flex justify-between my-4 mx-2">
                <div>
                    <h2 className="text-xl md:text-3xl font-medium mb-1 relative inline-block">
                        Noodles
                    </h2>
                    <div className="flex items-center">
                        <div className="w-12 md:w-20 h-[2px] bg-accentRed"></div>
                        <div className="w-1 h-1 bg-accentRed rounded-full ml-2"></div>
                    </div>
                </div>
                <div className="block md:flex gap-3">
                    <div>
                        <div className="relative w-full max-w-md hidden md:block">
                            <Search
                                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                                size={16}
                            />
                            <Input
                                id=""
                                type="text"
                                placeholder="Search..."
                                className="mt-1 border-gray-500 pl-8 pr-4"
                            />
                        </div>
                    </div>
                    <div className="flex gap-3 items-center justify-end">
                        <div className="relative inline-block text-left">
                            <button
                                onClick={toggleDropdown}
                                className="px-3 md:px-4 py-1 md:py-2 flex items-center border border-gray-400 text-gray-700 bg-crimson rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-crimson"
                            >
                                Filter By
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="ml-2 h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>

                            {isOpen && (
                                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                                    <div className="py-1">
                                        <a
                                            href="#"
                                            className="text-gray-700 block px-4 py-2 text-sm hover:bg-crimson hover:bg-gray-100 duration-300"
                                        >
                                            Popular
                                        </a>
                                        <a
                                            href="#"
                                            className="text-gray-700 block px-4 py-2 text-sm hover:bg-crimson hover:bg-gray-100 duration-300"
                                        >
                                            Price
                                        </a>
                                        <a
                                            href="#"
                                            className="text-gray-700 block px-4 py-2 text-sm hover:bg-crimson hover:bg-gray-100 duration-300"
                                        >
                                            Rating
                                        </a>
                                        <a
                                            href="#"
                                            className="text-gray-700 block px-4 py-2 text-sm hover:bg-crimson hover:bg-gray-100 duration-300"
                                        >
                                            Spicy Level
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="flex gap-2">
                            <ArrowUpWideNarrow
                                size={20}
                                className="text-gray-600"
                            />
                            <ArrowDownWideNarrow
                                size={20}
                                className="text-gray-600"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
