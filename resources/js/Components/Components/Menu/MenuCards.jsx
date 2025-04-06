import Mohinga from "../../../images/Mohinga.png";
import { Heart, Star, ShoppingCart } from "lucide-react";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import { motion } from "framer-motion";

export default function MenuCards() {
    return (
        <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
        >
            <div className="mt-5 flex flex-wrap">
                <div className="w-[93%] lg:mx-0 mx-auto md:w-1/2 lg:w-1/3 p-1 mt-16">
                    <div className="py-3 relative bg-white border border-gray-400 shadow-lg rounded-lg">
                        <div className="absolute -top-10 mr-3 right-0 flex justify-end">
                            <img
                                src={Mohinga}
                                alt="Mohinga"
                                className="w-[150px] object-cover rounded-full border-4 border-white shadow-md"
                            />
                        </div>

                        <div className="pt-5 px-6">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex gap-4">
                                    <a
                                        href="#"
                                        className="text-gray-500 hover:text-accentRed"
                                    >
                                        <Heart size={20} />
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
                            <h3 className="text-lg mt-12 font-semibold">
                                Mohinga
                            </h3>
                            <p className="text-[13px] text-gray-600 mt-2">
                                a popular Burmese dish featuring rice noodles in
                                a flavorful fish broth, garnished with herbs,
                                lime, and crispy fritters.
                            </p>
                            <div className="flex items-center justify-between mt-6">
                                <span className="text-lg font-bold text-gray-800">
                                    6.12 $
                                </span>
                                <button>
                                    <ShoppingCart
                                        size={24}
                                        className="text-accentRed hover:text-hoverRed duration-300"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[93%] lg:mx-0 mx-auto md:w-1/2 lg:w-1/3 p-1 mt-16">
                    <div className="py-3 relative bg-white border border-gray-400 shadow-lg rounded-lg">
                        <div className="absolute -top-10 mr-3 right-0 flex justify-end">
                            <img
                                src={Mohinga}
                                alt="Mohinga"
                                className="w-[150px] object-cover rounded-full border-4 border-white shadow-md"
                            />
                        </div>

                        <div className="pt-5 px-6">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex gap-4">
                                    <a
                                        href="#"
                                        className="text-gray-500 hover:text-accentRed"
                                    >
                                        <Heart size={20} />
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
                            <h3 className="text-lg mt-12 font-semibold">
                                Mohinga
                            </h3>
                            <p className="text-[13px] text-gray-600 mt-2">
                                a popular Burmese dish featuring rice noodles in
                                a flavorful fish broth, garnished with herbs,
                                lime, and crispy fritters.
                            </p>
                            <div className="flex items-center justify-between mt-6">
                                <span className="text-lg font-bold text-gray-800">
                                    6.12 $
                                </span>
                                <button>
                                    <ShoppingCart
                                        size={24}
                                        className="text-accentRed hover:text-hoverRed duration-300"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[93%] lg:mx-0 mx-auto md:w-1/2 lg:w-1/3 p-1 mt-16">
                    <div className="py-3 relative bg-white border border-gray-400 shadow-lg rounded-lg">
                        <div className="absolute -top-10 mr-3 right-0 flex justify-end">
                            <img
                                src={Mohinga}
                                alt="Mohinga"
                                className="w-[150px] object-cover rounded-full border-4 border-white shadow-md"
                            />
                        </div>

                        <div className="pt-5 px-6">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex gap-4">
                                    <a
                                        href="#"
                                        className="text-gray-500 hover:text-accentRed"
                                    >
                                        <Heart size={20} />
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
                            <h3 className="text-lg mt-12 font-semibold">
                                Mohinga
                            </h3>
                            <p className="text-[13px] text-gray-600 mt-2">
                                a popular Burmese dish featuring rice noodles in
                                a flavorful fish broth, garnished with herbs,
                                lime, and crispy fritters.
                            </p>
                            <div className="flex items-center justify-between mt-6">
                                <span className="text-lg font-bold text-gray-800">
                                    6.12 $
                                </span>
                                <button>
                                    <ShoppingCart
                                        size={24}
                                        className="text-accentRed hover:text-hoverRed duration-300"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[93%] lg:mx-0 mx-auto md:w-1/2 lg:w-1/3 p-1 mt-16">
                    <div className="py-3 relative bg-white border border-gray-400 shadow-lg rounded-lg">
                        <div className="absolute -top-10 mr-3 right-0 flex justify-end">
                            <img
                                src={Mohinga}
                                alt="Mohinga"
                                className="w-[150px] object-cover rounded-full border-4 border-white shadow-md"
                            />
                        </div>

                        <div className="pt-5 px-6">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex gap-4">
                                    <a
                                        href="#"
                                        className="text-gray-500 hover:text-accentRed"
                                    >
                                        <Heart size={20} />
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
                            <h3 className="text-lg mt-12 font-semibold">
                                Mohinga
                            </h3>
                            <p className="text-[13px] text-gray-600 mt-2">
                                a popular Burmese dish featuring rice noodles in
                                a flavorful fish broth, garnished with herbs,
                                lime, and crispy fritters.
                            </p>
                            <div className="flex items-center justify-between mt-6">
                                <span className="text-lg font-bold text-gray-800">
                                    6.12 $
                                </span>
                                <button>
                                    <ShoppingCart
                                        size={24}
                                        className="text-accentRed hover:text-hoverRed duration-300"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[93%] lg:mx-0 mx-auto md:w-1/2 lg:w-1/3 p-1 mt-16">
                    <div className="py-3 relative bg-white border border-gray-400 shadow-lg rounded-lg">
                        <div className="absolute -top-10 mr-3 right-0 flex justify-end">
                            <img
                                src={Mohinga}
                                alt="Mohinga"
                                className="w-[150px] object-cover rounded-full border-4 border-white shadow-md"
                            />
                        </div>

                        <div className="pt-5 px-6">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex gap-4">
                                    <a
                                        href="#"
                                        className="text-gray-500 hover:text-accentRed"
                                    >
                                        <Heart size={20} />
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
                            <h3 className="text-lg mt-12 font-semibold">
                                Mohinga
                            </h3>
                            <p className="text-[13px] text-gray-600 mt-2">
                                a popular Burmese dish featuring rice noodles in
                                a flavorful fish broth, garnished with herbs,
                                lime, and crispy fritters.
                            </p>
                            <div className="flex items-center justify-between mt-6">
                                <span className="text-lg font-bold text-gray-800">
                                    6.12 $
                                </span>
                                <button>
                                    <ShoppingCart
                                        size={24}
                                        className="text-accentRed hover:text-hoverRed duration-300"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[93%] lg:mx-0 mx-auto md:w-1/2 lg:w-1/3 p-1 mt-16">
                    <div className="py-3 relative bg-white border border-gray-400 shadow-lg rounded-lg">
                        <div className="absolute -top-10 mr-3 right-0 flex justify-end">
                            <img
                                src={Mohinga}
                                alt="Mohinga"
                                className="w-[150px] object-cover rounded-full border-4 border-white shadow-md"
                            />
                        </div>

                        <div className="pt-5 px-6">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex gap-4">
                                    <a
                                        href="#"
                                        className="text-gray-500 hover:text-accentRed"
                                    >
                                        <Heart size={20} />
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
                            <h3 className="text-lg mt-12 font-semibold">
                                Mohinga
                            </h3>
                            <p className="text-[13px] text-gray-600 mt-2">
                                a popular Burmese dish featuring rice noodles in
                                a flavorful fish broth, garnished with herbs,
                                lime, and crispy fritters.
                            </p>
                            <div className="flex items-center justify-between mt-6">
                                <span className="text-lg font-bold text-gray-800">
                                    6.12 $
                                </span>
                                <button>
                                    <ShoppingCart
                                        size={24}
                                        className="text-accentRed hover:text-hoverRed duration-300"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8 mx-auto">
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious href="#" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#" isActive>
                                2
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">3</PaginationLink>
                        </PaginationItem>

                        <PaginationItem>
                            <PaginationNext href="#" />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </motion.div>
    );
}
