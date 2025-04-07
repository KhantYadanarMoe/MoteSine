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
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function MenuCards() {
    let [menus, setMenus] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 6;

    let getMenus = async () => {
        let res = await axios.get("/api/menus");
        let data = res.data;
        setMenus(data.menus);
    };

    // change to dynamic data after writing create category feature
    const categoryStyles = {
        all: "text-gray-700 bg-gray-200",
        curries: "text-red-700 bg-red-200",
        noodles: "text-yellow-800 bg-yellow-200",
        salads: "text-green-800 bg-green-200",
        soups: "text-blue-800 bg-blue-200",
        "side-dishes": "text-pink-800 bg-pink-200",
        "snacks-street-foods": "text-orange-800 bg-orange-200",
        "chefs-favorite": "text-purple-800 bg-purple-200",
        desserts: "text-rose-800 bg-rose-200",
        "drinks-beverages": "text-teal-800 bg-teal-200",
    };

    useEffect(() => {
        getMenus();
    }, []);

    const indexOfLastMenu = currentPage * rowsPerPage;
    const indexOfFirstMenu = indexOfLastMenu - rowsPerPage;
    const currentMenus = menus.slice(indexOfFirstMenu, indexOfLastMenu);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    return (
        <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
        >
            <div className="mt-5 flex flex-wrap">
                {currentMenus.length > 0 ? (
                    currentMenus.map((menu) => (
                        <div className="w-[93%] lg:mx-0 mx-auto md:w-1/2 lg:w-1/3 p-1 mt-16">
                            <div className="py-3 relative bg-white border h-[270px] border-gray-400 shadow-lg rounded-lg">
                                <div className="absolute -top-10 mr-3 right-0 flex justify-end">
                                    <img
                                        src={`/storage/${menu.image}`}
                                        alt={menu.title}
                                        className="w-[140px] h-[140px] object-cover rounded-full border-4 border-white shadow-md"
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
                                    <div className="flex gap-2 mt-12">
                                        <h3 className="text-lg font-semibold">
                                            {menu.title}
                                        </h3>
                                        <Link to="">
                                            <span
                                                className={`p-1 text-[10px] rounded-md ${
                                                    categoryStyles[
                                                        menu.category
                                                    ] ||
                                                    categoryStyles[
                                                        "snacks-street-foods"
                                                    ]
                                                }`}
                                            >
                                                {menu.category}
                                            </span>
                                        </Link>
                                    </div>
                                    <p className="text-[13px] text-gray-600 mt-2 line-clamp-3">
                                        {menu.desc}
                                    </p>
                                    <div className="flex items-center justify-between mt-6">
                                        {menu.promotion ? (
                                            <div className="flex items-center gap-1">
                                                <span className="text-red-600 font-semibold">
                                                    {(
                                                        menu.price -
                                                        (menu.price *
                                                            menu.promotion) /
                                                            100
                                                    ).toFixed(2)}{" "}
                                                    $
                                                </span>
                                                <span className="line-through text-sm text-gray-500">
                                                    {menu.price} $
                                                </span>
                                            </div>
                                        ) : (
                                            <span>{menu.price} $</span>
                                        )}
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
                    ))
                ) : (
                    <p className="text-center font-medium text-accentRed">
                        Loading...
                    </p> //add lazy loading after complete
                )}
            </div>
            <div className="mt-8 mx-auto">
                <Pagination className="text-accentRed">
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious
                                onClick={() =>
                                    handlePageChange(currentPage - 1)
                                }
                                disabled={currentPage === 1}
                                className="cursor-pointer"
                            />
                        </PaginationItem>
                        {Array.from(
                            { length: Math.ceil(menus.length / rowsPerPage) },
                            (_, index) => (
                                <PaginationItem key={index}>
                                    <PaginationLink
                                        onClick={() =>
                                            handlePageChange(index + 1)
                                        }
                                        isActive={currentPage === index + 1}
                                        className="cursor-pointer"
                                    >
                                        {index + 1}
                                    </PaginationLink>
                                </PaginationItem>
                            )
                        )}
                        <PaginationItem>
                            <PaginationNext
                                onClick={() =>
                                    handlePageChange(currentPage + 1)
                                }
                                className="cursor-pointer"
                                disabled={
                                    currentPage ===
                                    Math.ceil(menus.length / rowsPerPage)
                                }
                            />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </motion.div>
    );
}
