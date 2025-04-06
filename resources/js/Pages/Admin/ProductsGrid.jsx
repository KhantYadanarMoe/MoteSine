import {
    List,
    LayoutPanelLeft,
    Plus,
    Heart,
    Star,
    ShoppingCart,
} from "lucide-react";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "../../Components/ui/pagination";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "../../Components/ui/button";
import Product from "../../../images/product.png";

export default function ProductsGrid() {
    return (
        <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="mx-2 md:mx-4 my-8"
        >
            <div className="flex justify-between md:items-center">
                <h1 className="md:text-lg font-medium">43 Products Found</h1>
                <div className="flex flex-col md:flex-row items-end gap-3">
                    <div className="flex gap-2 order-2 md:order-1">
                        <Link
                            to="/admin/products"
                            className="px-1 py-1 border border-accentRed text-accentRed rounded-sm hover:bg-gray-200 duration-300"
                        >
                            <List size={20} />
                        </Link>
                        <Link
                            to="/admin/products/grid"
                            className="px-1 py-1 border border-accentRed text-accentRed rounded-sm hover:bg-gray-200 duration-300"
                        >
                            <LayoutPanelLeft size={20} />
                        </Link>
                    </div>

                    <Link
                        to="/admin/products/create"
                        className="order-1 md:order-2"
                    >
                        <Button
                            variant="default"
                            className="rounded-lg bg-accentRed text-white hover:bg-hoverRed duration-300"
                        >
                            <Plus size={16} /> Add product
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-2">
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
                        alt="product"
                        className="w-40 md:w-36 xl:w-32 h-auto object-cover mx-auto my-3"
                    />
                    <div className="flex justify-between items-center my-3">
                        <div>
                            <h1 className="font-medium mb-1">
                                Eain Chat Mote Hti
                            </h1>
                            <p className="text-sm font-medium">6.12 $</p>
                        </div>
                        <button className="bg-accentRed hover:bg-hoverRed duration-300 rounded-full px-2 py-2">
                            <ShoppingCart size={16} className="text-white" />
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
                        alt="product"
                        className="w-40 md:w-36 xl:w-32 h-auto object-cover mx-auto my-3"
                    />
                    <div className="flex justify-between items-center my-3">
                        <div>
                            <h1 className="font-medium mb-1">
                                Eain Chat Mote Hti
                            </h1>
                            <p className="text-sm font-medium">6.12 $</p>
                        </div>
                        <button className="bg-accentRed hover:bg-hoverRed duration-300 rounded-full px-2 py-2">
                            <ShoppingCart size={16} className="text-white" />
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
                        alt="product"
                        className="w-40 md:w-36 xl:w-32 h-auto object-cover mx-auto my-3"
                    />
                    <div className="flex justify-between items-center my-3">
                        <div>
                            <h1 className="font-medium mb-1">
                                Eain Chat Mote Hti
                            </h1>
                            <p className="text-sm font-medium">6.12 $</p>
                        </div>
                        <button className="bg-accentRed hover:bg-hoverRed duration-300 rounded-full px-2 py-2">
                            <ShoppingCart size={16} className="text-white" />
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
                        alt="product"
                        className="w-40 md:w-36 xl:w-32 h-auto object-cover mx-auto my-3"
                    />
                    <div className="flex justify-between items-center my-3">
                        <div>
                            <h1 className="font-medium mb-1">
                                Eain Chat Mote Hti
                            </h1>
                            <p className="text-sm font-medium">6.12 $</p>
                        </div>
                        <button className="bg-accentRed hover:bg-hoverRed duration-300 rounded-full px-2 py-2">
                            <ShoppingCart size={16} className="text-white" />
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
                        alt="product"
                        className="w-40 md:w-36 xl:w-32 h-auto object-cover mx-auto my-3"
                    />
                    <div className="flex justify-between items-center my-3">
                        <div>
                            <h1 className="font-medium mb-1">
                                Eain Chat Mote Hti
                            </h1>
                            <p className="text-sm font-medium">6.12 $</p>
                        </div>
                        <button className="bg-accentRed hover:bg-hoverRed duration-300 rounded-full px-2 py-2">
                            <ShoppingCart size={16} className="text-white" />
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
                        alt="product"
                        className="w-40 md:w-36 xl:w-32 h-auto object-cover mx-auto my-3"
                    />
                    <div className="flex justify-between items-center my-3">
                        <div>
                            <h1 className="font-medium mb-1">
                                Eain Chat Mote Hti
                            </h1>
                            <p className="text-sm font-medium">6.12 $</p>
                        </div>
                        <button className="bg-accentRed hover:bg-hoverRed duration-300 rounded-full px-2 py-2">
                            <ShoppingCart size={16} className="text-white" />
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
                        alt="product"
                        className="w-40 md:w-36 xl:w-32 h-auto object-cover mx-auto my-3"
                    />
                    <div className="flex justify-between items-center my-3">
                        <div>
                            <h1 className="font-medium mb-1">
                                Eain Chat Mote Hti
                            </h1>
                            <p className="text-sm font-medium">6.12 $</p>
                        </div>
                        <button className="bg-accentRed hover:bg-hoverRed duration-300 rounded-full px-2 py-2">
                            <ShoppingCart size={16} className="text-white" />
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
                        alt="product"
                        className="w-40 md:w-36 xl:w-32 h-auto object-cover mx-auto my-3"
                    />
                    <div className="flex justify-between items-center my-3">
                        <div>
                            <h1 className="font-medium mb-1">
                                Eain Chat Mote Hti
                            </h1>
                            <p className="text-sm font-medium">6.12 $</p>
                        </div>
                        <button className="bg-accentRed hover:bg-hoverRed duration-300 rounded-full px-2 py-2">
                            <ShoppingCart size={16} className="text-white" />
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
                        alt="product"
                        className="w-40 md:w-36 xl:w-32 h-auto object-cover mx-auto my-3"
                    />
                    <div className="flex justify-between items-center my-3">
                        <div>
                            <h1 className="font-medium mb-1">
                                Eain Chat Mote Hti
                            </h1>
                            <p className="text-sm font-medium">6.12 $</p>
                        </div>
                        <button className="bg-accentRed hover:bg-hoverRed duration-300 rounded-full px-2 py-2">
                            <ShoppingCart size={16} className="text-white" />
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
                        alt="product"
                        className="w-40 md:w-36 xl:w-32 h-auto object-cover mx-auto my-3"
                    />
                    <div className="flex justify-between items-center my-3">
                        <div>
                            <h1 className="font-medium mb-1">
                                Eain Chat Mote Hti
                            </h1>
                            <p className="text-sm font-medium">6.12 $</p>
                        </div>
                        <button className="bg-accentRed hover:bg-hoverRed duration-300 rounded-full px-2 py-2">
                            <ShoppingCart size={16} className="text-white" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="mt-8 flex">
                <div className="ml-auto">
                    <Pagination className="text-accentRed">
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
                            <PaginationItem></PaginationItem>
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
