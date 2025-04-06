import { Heart, Star, ShoppingCart, Search } from "lucide-react";
import Product from "../../../images/Product.png";
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
import { Input } from "../ui/input";

export default function ProductCards() {
    return (
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.2 }}
        >
            <div className="w-[96%] lg:w-[97%] mx-auto my-8 px-3 md:px-6">
                <div className="flex justify-between">
                    <div className="flex flex-col items-center mx-auto md:block md:mx-0">
                        <div>
                            <h2 className="text-3xl md:text-2xl font-semibold mb-1 relative inline-block">
                                Our Products
                            </h2>
                            <div className="flex items-center">
                                <div className="w-36 md:w-28 h-[2px] bg-accentRed"></div>
                                <div className="w-1 h-1 bg-accentRed rounded-full ml-2"></div>
                            </div>
                        </div>
                        <p className="md:text-sm text-gray-800 mt-2">
                            Here are our products that can take you home.
                        </p>
                    </div>
                    <div className="hidden md:block">
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

                <div className="my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-[97%] xl:w-[93%] mx-auto">
                    <div className="px-3 py-4 bg-white border border-gray-400 shadow-lg rounded-xl">
                        <div className="flex justify-between">
                            <a href="">
                                <Heart size={16} className="text-accentRed" />
                            </a>
                            <a
                                href=""
                                className="text-sm flex items-center gap-1 text-accentYellow"
                            >
                                <Star
                                    size={16}
                                    fill="currentColor"
                                    className="text-accentYellow"
                                />{" "}
                                4.3
                            </a>
                        </div>
                        <img
                            src={Product}
                            alt=""
                            className="w-44 md:w-40 xl:w-36 h-auto object-cover mx-auto my-3"
                        />
                        <div className="flex justify-between items-center my-3">
                            <div>
                                <h1 className="font-medium mb-1">
                                    Eain Chat Mote Hti
                                </h1>
                                <p className="text-sm font-medium">6.12 $</p>
                            </div>
                            <button className="bg-accentRed hover:bg-hoverRed duration-300 rounded-full px-2 py-2">
                                <ShoppingCart
                                    size={16}
                                    className="text-white"
                                />
                            </button>
                        </div>
                    </div>
                    <div className="px-3 py-4 bg-white border border-gray-400 shadow-lg rounded-xl">
                        <div className="flex justify-between">
                            <a href="">
                                <Heart size={16} className="text-accentRed" />
                            </a>
                            <a
                                href=""
                                className="text-sm flex items-center gap-1 text-accentYellow"
                            >
                                <Star
                                    size={16}
                                    fill="currentColor"
                                    className="text-accentYellow"
                                />{" "}
                                4.3
                            </a>
                        </div>
                        <img
                            src={Product}
                            alt=""
                            className="w-44 md:w-40 xl:w-36 h-auto object-cover mx-auto my-3"
                        />
                        <div className="flex justify-between items-center my-3">
                            <div>
                                <h1 className="font-medium mb-1">
                                    Eain Chat Mote Hti
                                </h1>
                                <p className="text-sm font-medium">6.12 $</p>
                            </div>
                            <button className="bg-accentRed hover:bg-hoverRed duration-300 rounded-full px-2 py-2">
                                <ShoppingCart
                                    size={16}
                                    className="text-white"
                                />
                            </button>
                        </div>
                    </div>
                    <div className="px-3 py-4 bg-white border border-gray-400 shadow-lg rounded-xl">
                        <div className="flex justify-between">
                            <a href="">
                                <Heart size={16} className="text-accentRed" />
                            </a>
                            <a
                                href=""
                                className="text-sm flex items-center gap-1 text-accentYellow"
                            >
                                <Star
                                    size={16}
                                    fill="currentColor"
                                    className="text-accentYellow"
                                />{" "}
                                4.3
                            </a>
                        </div>
                        <img
                            src={Product}
                            alt=""
                            className="w-44 md:w-40 xl:w-36 h-auto object-cover mx-auto my-3"
                        />
                        <div className="flex justify-between items-center my-3">
                            <div>
                                <h1 className="font-medium mb-1">
                                    Eain Chat Mote Hti
                                </h1>
                                <p className="text-sm font-medium">6.12 $</p>
                            </div>
                            <button className="bg-accentRed hover:bg-hoverRed duration-300 rounded-full px-2 py-2">
                                <ShoppingCart
                                    size={16}
                                    className="text-white"
                                />
                            </button>
                        </div>
                    </div>
                    <div className="px-3 py-4 bg-white border border-gray-400 shadow-lg rounded-xl">
                        <div className="flex justify-between">
                            <a href="">
                                <Heart size={16} className="text-accentRed" />
                            </a>
                            <a
                                href=""
                                className="text-sm flex items-center gap-1 text-accentYellow"
                            >
                                <Star
                                    size={16}
                                    fill="currentColor"
                                    className="text-accentYellow"
                                />{" "}
                                4.3
                            </a>
                        </div>
                        <img
                            src={Product}
                            alt=""
                            className="w-44 md:w-40 xl:w-36 h-auto object-cover mx-auto my-3"
                        />
                        <div className="flex justify-between items-center my-3">
                            <div>
                                <h1 className="font-medium mb-1">
                                    Eain Chat Mote Hti
                                </h1>
                                <p className="text-sm font-medium">6.12 $</p>
                            </div>
                            <button className="bg-accentRed hover:bg-hoverRed duration-300 rounded-full px-2 py-2">
                                <ShoppingCart
                                    size={16}
                                    className="text-white"
                                />
                            </button>
                        </div>
                    </div>
                    <div className="px-3 py-4 bg-white border border-gray-400 shadow-lg rounded-xl">
                        <div className="flex justify-between">
                            <a href="">
                                <Heart size={16} className="text-accentRed" />
                            </a>
                            <a
                                href=""
                                className="text-sm flex items-center gap-1 text-accentYellow"
                            >
                                <Star
                                    size={16}
                                    fill="currentColor"
                                    className="text-accentYellow"
                                />{" "}
                                4.3
                            </a>
                        </div>
                        <img
                            src={Product}
                            alt=""
                            className="w-44 md:w-40 xl:w-36 h-auto object-cover mx-auto my-3"
                        />
                        <div className="flex justify-between items-center my-3">
                            <div>
                                <h1 className="font-medium mb-1">
                                    Eain Chat Mote Hti
                                </h1>
                                <p className="text-sm font-medium">6.12 $</p>
                            </div>
                            <button className="bg-accentRed hover:bg-hoverRed duration-300 rounded-full px-2 py-2">
                                <ShoppingCart
                                    size={16}
                                    className="text-white"
                                />
                            </button>
                        </div>
                    </div>
                    <div className="px-3 py-4 bg-white border border-gray-400 shadow-lg rounded-xl">
                        <div className="flex justify-between">
                            <a href="">
                                <Heart size={16} className="text-accentRed" />
                            </a>
                            <a
                                href=""
                                className="text-sm flex items-center gap-1 text-accentYellow"
                            >
                                <Star
                                    size={16}
                                    fill="currentColor"
                                    className="text-accentYellow"
                                />{" "}
                                4.3
                            </a>
                        </div>
                        <img
                            src={Product}
                            alt=""
                            className="w-44 md:w-40 xl:w-36 h-auto object-cover mx-auto my-3"
                        />
                        <div className="flex justify-between items-center my-3">
                            <div>
                                <h1 className="font-medium mb-1">
                                    Eain Chat Mote Hti
                                </h1>
                                <p className="text-sm font-medium">6.12 $</p>
                            </div>
                            <button className="bg-accentRed hover:bg-hoverRed duration-300 rounded-full px-2 py-2">
                                <ShoppingCart
                                    size={16}
                                    className="text-white"
                                />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-4">
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
            </div>
        </motion.div>
    );
}
