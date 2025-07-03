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
} from "@/Components/ui/pagination";
import { Button } from "../../Components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Empty from "../../../images/Empty.png";
import { useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";
import { useSearch } from "@/contexts/SearchContext";

export default function MenuGrid() {
    const [loading, setLoading] = useState(false);
    // state to store menus
    let [menus, setMenus] = useState([]);
    // state for pagination
    const [currentPage, setCurrentPage] = useState(1);
    // rows to show in a page
    const rowsPerPage = 9;
    const { query } = useSearch();

    // fetch data that send from backend
    let getMenus = async () => {
        setLoading(true);
        try {
            let res = await axios.get("/api/menus");
            let data = res.data;
            setMenus(data.menus);
        } catch (error) {
            console.error("Failed to fetch menus:", error);
        } finally {
            setLoading(false);
        }
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

    // call data fetching function in useEffect to run when user enter the page
    useEffect(() => {
        getMenus();
    }, []);

    const filteredMenus = menus.filter((menu) =>
        menu.title?.toLowerCase().includes(query.toLowerCase())
    );

    const indexOfLastMenu = currentPage * rowsPerPage;
    const indexOfFirstMenu = indexOfLastMenu - rowsPerPage;
    const currentMenus = filteredMenus.slice(indexOfFirstMenu, indexOfLastMenu);

    const totalPages = Math.ceil(filteredMenus.length / rowsPerPage);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const MenuCardSkeleton = () => (
        <div className="w-full lg:mx-0 mx-auto md:w-1/2 lg:w-1/3 p-1 mt-16">
            <div className="py-3 relative bg-white border h-[280px] border-gray-400 shadow-lg rounded-lg animate-pulse">
                <div className="absolute -top-10 mr-3 right-0 flex justify-end">
                    <div className="w-[130px] h-[130px] bg-gray-300 rounded-full border-4 border-white shadow-md" />
                </div>

                <div className="pt-5 px-6">
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex gap-4">
                            <div className="w-5 h-5 bg-gray-300 rounded" />
                            <div className="flex items-center gap-1">
                                <div className="w-5 h-5 bg-gray-300 rounded" />
                                <div className="w-6 h-4 bg-gray-200 rounded" />
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-2 mt-12 items-center">
                        <div className="w-24 h-5 bg-gray-300 rounded" />
                        <div className="w-12 h-4 bg-gray-200 rounded" />
                    </div>

                    <div className="mt-2">
                        <div className="w-full h-3 bg-gray-200 rounded mb-1" />
                        <div className="w-[90%] h-3 bg-gray-200 rounded mb-1" />
                        <div className="w-[80%] h-3 bg-gray-200 rounded" />
                    </div>

                    <div className="flex items-center justify-between mt-6">
                        <div className="w-24 h-4 bg-gray-300 rounded" />
                        <div className="w-6 h-6 bg-gray-300 rounded" />
                    </div>

                    <div className="w-32 h-3 mt-2 bg-gray-200 rounded" />
                </div>
            </div>
        </div>
    );

    return (
        <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="mx-4 xl:mx-1 py-8"
        >
            <div className="flex justify-between md:items-center">
                <h1 className="md:text-lg font-medium">
                    {menus.length} Menu Items Found
                </h1>
                <div className="flex flex-col md:flex-row items-end gap-3">
                    <div className="flex gap-2 order-2 md:order-1">
                        <Link
                            to="/admin/menu"
                            className="px-1 py-1 border border-accentRed text-accentRed rounded-sm hover:bg-gray-100 duration-300"
                        >
                            <List size={20} />
                        </Link>
                        <Link
                            to="/admin/menu/grid"
                            className="px-1 py-1 border border-accentRed text-accentRed rounded-sm hover:bg-gray-100 duration-300"
                        >
                            <LayoutPanelLeft size={20} />
                        </Link>
                    </div>

                    <Link
                        to="/admin/menu/create"
                        className="order-1 md:order-2"
                    >
                        <Button
                            variant="default"
                            className="rounded-lg bg-accentRed text-white hover:bg-hoverRed duration-300"
                        >
                            <Plus size={16} /> Add menu
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="mt-6 flex flex-wrap">
                {loading ? (
                    Array.from({ length: 3 }).map((_, i) => (
                        <MenuCardSkeleton key={i} />
                    ))
                ) : menus.length === 0 ? (
                    <div className="absolute inset-0 z-10  bg-lightBackground flex flex-col items-center justify-center text-center font-medium text-accentRed h-full">
                        <img
                            src={Empty}
                            alt="No data"
                            className="mx-auto w-60"
                        />
                        <h2 className="text-xl font-semibold text-gray-700 mb-2">
                            No data to show.
                        </h2>
                        <p className="text-gray-500 mb-4 text-sm">
                            The table you are looking for is empty.
                        </p>
                    </div>
                ) : (
                    currentMenus.map((menu) => (
                        <div className="w-[100%] lg:mx-0 mx-auto md:w-1/2 lg:w-1/3 p-1 mt-16">
                            <div className="py-3 relative bg-white border h-[280px] border-gray-400 shadow-lg rounded-lg">
                                <div className="absolute -top-10 mr-3 right-0 flex justify-end">
                                    <img
                                        src={`/storage/${menu.image}`}
                                        alt={menu.title}
                                        className="w-[130px] h-[130px] object-cover rounded-full border-4 border-white shadow-md"
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
                                                {menu.category.category}
                                            </span>
                                        </Link>
                                    </div>
                                    <p className="text-[13px] text-gray-600 mt-2 line-clamp-3">
                                        {menu.desc}
                                    </p>
                                    <div className="flex items-center justify-between mt-6">
                                        {menu.promotion &&
                                        new Date() >=
                                            new Date(menu.startDate) &&
                                        new Date() <= new Date(menu.endDate) ? (
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
                                    {menu.promotion &&
                                        new Date() >=
                                            new Date(menu.startDate) &&
                                        new Date() <=
                                            new Date(menu.endDate) && (
                                            <p className="text-xs text-gray-500">
                                                Promo period:{" "}
                                                {dayjs(menu.startDate).format(
                                                    "MMM D"
                                                )}{" "}
                                                -{" "}
                                                {dayjs(menu.endDate).format(
                                                    "MMM D"
                                                )}
                                            </p>
                                        )}
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
            <div className="mt-8 flex justify-center gap-4">
                <Pagination className="text-accentRed">
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious
                                onClick={() =>
                                    handlePageChange(currentPage - 1)
                                }
                                disabled={currentPage === 1}
                                className={`cursor-pointer ${
                                    currentPage === 1
                                        ? "opacity-50 cursor-not-allowed"
                                        : ""
                                }`}
                            />
                        </PaginationItem>
                        {Array.from(
                            {
                                length: Math.ceil(menus.length / rowsPerPage),
                            },
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
                                className={`cursor-pointer ${
                                    currentPage === totalPages
                                        ? "opacity-50 cursor-not-allowed"
                                        : ""
                                }`}
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
