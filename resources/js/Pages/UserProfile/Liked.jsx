import { Search, Star, Heart, ShoppingCart } from "lucide-react";
import Mohinga from "../../../images/mohinga.png";
import { motion } from "framer-motion";
import { Input } from "../../Components/ui/input";

export default function Liked() {
    return (
        <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="w-full lg:w-[73%] flex flex-col gap-6 py-8 px-4 lg:ml-[28%]"
        >
            <div className="flex justify-between">
                <h1 className="text-2xl font-medium">Favorite</h1>
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
            </div>
            <div className="md:flex flex-wrap block">
                <div className="md:w-1/2 w-[99%] md:mx-0 mx-auto p-1 mt-10">
                    <div className="relative py-3 bg-white border border-gray-400 shadow-lg rounded-lg">
                        <div className="absolute -top-10 mr-3 right-0 flex justify-end">
                            <img
                                src={Mohinga}
                                alt="Mohinga"
                                className="w-[130px] md:w-[150px] object-cover rounded-full border-4 border-white shadow-md"
                            />
                        </div>

                        <div className="pt-5 px-6">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex gap-4">
                                    <a
                                        href="#"
                                        className="text-gray-500 hover:text-accentRed"
                                    >
                                        <Heart
                                            size={20}
                                            fill="currentColor"
                                            className="text-accentRed"
                                        />
                                    </a>
                                    <div className="flex items-center gap-1 text-gray-600">
                                        <Star
                                            size={20}
                                            fill="currentColor"
                                            className="text-accentYellow"
                                        />
                                        <span className="text-sm font-medium">
                                            4.5
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-lg mt-7 md:mt-12 font-semibold">
                                Mohinga
                            </h3>
                            <p className="text-[13px] text-gray-600 mt-2">
                                a popular Burmese dish featuring rice noodles in
                                a flavorful fish broth, garnished with herbs,
                                lime, and crispy fritters.
                            </p>
                            <div className="flex items-center justify-between mt-4 md:mt-6">
                                <span className="md:text-lg font-bold text-gray-800">
                                    6.12 $
                                </span>
                                <button>
                                    <ShoppingCart
                                        size={24}
                                        className="text-accentRed"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 w-[99%] md:mx-0 mx-auto p-1 mt-10">
                    <div className="relative py-3 bg-white border border-gray-400 shadow-lg rounded-lg">
                        <div className="absolute -top-10 mr-3 right-0 flex justify-end">
                            <img
                                src={Mohinga}
                                alt="Mohinga"
                                className="w-[130px] md:w-[150px] object-cover rounded-full border-4 border-white shadow-md"
                            />
                        </div>

                        <div className="pt-5 px-6">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex gap-4">
                                    <a
                                        href="#"
                                        className="text-gray-500 hover:text-accentRed"
                                    >
                                        <Heart
                                            size={20}
                                            fill="currentColor"
                                            className="text-accentRed"
                                        />
                                    </a>
                                    <div className="flex items-center gap-1 text-gray-600">
                                        <Star
                                            size={20}
                                            fill="currentColor"
                                            className="text-accentYellow"
                                        />
                                        <span className="text-sm font-medium">
                                            4.5
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-lg mt-7 md:mt-12 font-semibold">
                                Mohinga
                            </h3>
                            <p className="text-[13px] text-gray-600 mt-2">
                                a popular Burmese dish featuring rice noodles in
                                a flavorful fish broth, garnished with herbs,
                                lime, and crispy fritters.
                            </p>
                            <div className="flex items-center justify-between mt-4 md:mt-6">
                                <span className="md:text-lg font-bold text-gray-800">
                                    6.12 $
                                </span>
                                <button>
                                    <ShoppingCart
                                        size={24}
                                        className="text-accentRed"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 w-[99%] md:mx-0 mx-auto p-1 mt-10">
                    <div className="relative py-3 bg-white border border-gray-400 shadow-lg rounded-lg">
                        <div className="absolute -top-10 mr-3 right-0 flex justify-end">
                            <img
                                src={Mohinga}
                                alt="Mohinga"
                                className="w-[130px] md:w-[150px] object-cover rounded-full border-4 border-white shadow-md"
                            />
                        </div>

                        <div className="pt-5 px-6">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex gap-4">
                                    <a
                                        href="#"
                                        className="text-gray-500 hover:text-accentRed"
                                    >
                                        <Heart
                                            size={20}
                                            fill="currentColor"
                                            className="text-accentRed"
                                        />
                                    </a>
                                    <div className="flex items-center gap-1 text-gray-600">
                                        <Star
                                            size={20}
                                            fill="currentColor"
                                            className="text-accentYellow"
                                        />
                                        <span className="text-sm font-medium">
                                            4.5
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-lg mt-7 md:mt-12 font-semibold">
                                Mohinga
                            </h3>
                            <p className="text-[13px] text-gray-600 mt-2">
                                a popular Burmese dish featuring rice noodles in
                                a flavorful fish broth, garnished with herbs,
                                lime, and crispy fritters.
                            </p>
                            <div className="flex items-center justify-between mt-4 md:mt-6">
                                <span className="md:text-lg font-bold text-gray-800">
                                    6.12 $
                                </span>
                                <button>
                                    <ShoppingCart
                                        size={24}
                                        className="text-accentRed"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 w-[99%] md:mx-0 mx-auto p-1 mt-10">
                    <div className="relative py-3 bg-white border border-gray-400 shadow-lg rounded-lg">
                        <div className="absolute -top-10 mr-3 right-0 flex justify-end">
                            <img
                                src={Mohinga}
                                alt="Mohinga"
                                className="w-[130px] md:w-[150px] object-cover rounded-full border-4 border-white shadow-md"
                            />
                        </div>

                        <div className="pt-5 px-6">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex gap-4">
                                    <a
                                        href="#"
                                        className="text-gray-500 hover:text-accentRed"
                                    >
                                        <Heart
                                            size={20}
                                            fill="currentColor"
                                            className="text-accentRed"
                                        />
                                    </a>
                                    <div className="flex items-center gap-1 text-gray-600">
                                        <Star
                                            size={20}
                                            fill="currentColor"
                                            className="text-accentYellow"
                                        />
                                        <span className="text-sm font-medium">
                                            4.5
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-lg mt-7 md:mt-12 font-semibold">
                                Mohinga
                            </h3>
                            <p className="text-[13px] text-gray-600 mt-2">
                                a popular Burmese dish featuring rice noodles in
                                a flavorful fish broth, garnished with herbs,
                                lime, and crispy fritters.
                            </p>
                            <div className="flex items-center justify-between mt-4 md:mt-6">
                                <span className="md:text-lg font-bold text-gray-800">
                                    6.12 $
                                </span>
                                <button>
                                    <ShoppingCart
                                        size={24}
                                        className="text-accentRed"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 w-[99%] md:mx-0 mx-auto p-1 mt-10">
                    <div className="relative py-3 bg-white border border-gray-400 shadow-lg rounded-lg">
                        <div className="absolute -top-10 mr-3 right-0 flex justify-end">
                            <img
                                src={Mohinga}
                                alt="Mohinga"
                                className="w-[130px] md:w-[150px] object-cover rounded-full border-4 border-white shadow-md"
                            />
                        </div>

                        <div className="pt-5 px-6">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex gap-4">
                                    <a
                                        href="#"
                                        className="text-gray-500 hover:text-accentRed"
                                    >
                                        <Heart
                                            size={20}
                                            fill="currentColor"
                                            className="text-accentRed"
                                        />
                                    </a>
                                    <div className="flex items-center gap-1 text-gray-600">
                                        <Star
                                            size={20}
                                            fill="currentColor"
                                            className="text-accentYellow"
                                        />
                                        <span className="text-sm font-medium">
                                            4.5
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-lg mt-7 md:mt-12 font-semibold">
                                Mohinga
                            </h3>
                            <p className="text-[13px] text-gray-600 mt-2">
                                a popular Burmese dish featuring rice noodles in
                                a flavorful fish broth, garnished with herbs,
                                lime, and crispy fritters.
                            </p>
                            <div className="flex items-center justify-between mt-4 md:mt-6">
                                <span className="md:text-lg font-bold text-gray-800">
                                    6.12 $
                                </span>
                                <button>
                                    <ShoppingCart
                                        size={24}
                                        className="text-accentRed"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 w-[99%] md:mx-0 mx-auto p-1 mt-10">
                    <div className="relative py-3 bg-white border border-gray-400 shadow-lg rounded-lg">
                        <div className="absolute -top-10 mr-3 right-0 flex justify-end">
                            <img
                                src={Mohinga}
                                alt="Mohinga"
                                className="w-[130px] md:w-[150px] object-cover rounded-full border-4 border-white shadow-md"
                            />
                        </div>

                        <div className="pt-5 px-6">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex gap-4">
                                    <a
                                        href="#"
                                        className="text-gray-500 hover:text-accentRed"
                                    >
                                        <Heart
                                            size={20}
                                            fill="currentColor"
                                            className="text-accentRed"
                                        />
                                    </a>
                                    <div className="flex items-center gap-1 text-gray-600">
                                        <Star
                                            size={20}
                                            fill="currentColor"
                                            className="text-accentYellow"
                                        />
                                        <span className="text-sm font-medium">
                                            4.5
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-lg mt-7 md:mt-12 font-semibold">
                                Mohinga
                            </h3>
                            <p className="text-[13px] text-gray-600 mt-2">
                                a popular Burmese dish featuring rice noodles in
                                a flavorful fish broth, garnished with herbs,
                                lime, and crispy fritters.
                            </p>
                            <div className="flex items-center justify-between mt-4 md:mt-6">
                                <span className="md:text-lg font-bold text-gray-800">
                                    6.12 $
                                </span>
                                <button>
                                    <ShoppingCart
                                        size={24}
                                        className="text-accentRed"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
