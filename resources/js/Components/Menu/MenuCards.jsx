import { Heart, Star, ShoppingCart } from "lucide-react";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/Components/ui/pagination";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Empty from "../../../images/Empty.png";
import { useCart } from "@/contexts/CartContext";
import dayjs from "dayjs";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "../../Components/ui/alert-dialog";
import { useSearch } from "@/contexts/SearchContext";
import { useAuth } from "@/contexts/AuthContext";

export default function MenuCards({ selectedCategory }) {
    // state to store menus
    let [menus, setMenus] = useState([]);
    // state for pagination
    const [currentPage, setCurrentPage] = useState(1);
    // loading state
    const [loading, setLoading] = useState(true);
    // search state
    const { query } = useSearch();
    // rows to show in a page
    const rowsPerPage = 6;

    const { addToCart } = useCart();

    const [wishlistItems, setWishlistItems] = useState([]);

    const [showLoginAlert, setShowLoginAlert] = useState(false);

    const { user } = useAuth();
    const isLoggedIn = !!user;

    const navigate = useNavigate();

    // fetch data that send from backend
    const getMenus = async () => {
        setLoading(true);
        try {
            const res = await axios.get("/api/menus");
            const data = res.data;
            const filteredMenus = data.menus.filter(
                (menu) =>
                    menu.visibility == 1 &&
                    menu.category &&
                    menu.category.visibility == 1
            );
            setMenus(filteredMenus);
        } catch (error) {
            console.error("Error fetching menus:", error);
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

    const filteredMenus = menus
        .filter((menu) =>
            menu.title?.toLowerCase().includes(query.toLowerCase())
        )
        .filter((menu) =>
            selectedCategory
                ? menu.category.category === selectedCategory
                : true
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

    // Fetch wishlist to know liked items
    const getWishlistItems = async () => {
        try {
            const res = await axios.get("/api/wishlist?filter=menu");
            setWishlistItems(res.data.items);
        } catch (error) {
            console.error("Failed to fetch wishlist items:", error);
        }
    };

    useEffect(() => {
        getMenus();
        getWishlistItems();
    }, []);

    const toggleWishlist = async (id, type) => {
        try {
            const formData = new FormData();
            formData.append("items[0][id]", id);
            formData.append("items[0][type]", type);

            const csrfToken = document
                .querySelector('meta[name="csrf-token"]')
                ?.getAttribute("content");

            await axios.post("/api/wishlist/toggle", formData, {
                headers: {
                    "X-CSRF-TOKEN": csrfToken,
                    "Content-Type": "multipart/form-data",
                },
            });

            getWishlistItems();
        } catch (err) {
            console.error("Failed to toggle wishlist", err);
        }
    };

    // Helper to check if item is in wishlist
    const isInWishlist = (id, type) => {
        return wishlistItems.some(
            (item) =>
                item.item_type === type &&
                ((type === "menu" && item.menu.id === id) ||
                    (type === "product" && item.product.id === id))
        );
    };

    const SkeletonCard = () => (
        <div className="w-[93%] lg:mx-0 mx-auto md:w-1/2 lg:w-1/3 p-1 mt-16 animate-pulse">
            <div className="py-3 relative bg-gray-100 h-[280px] border border-gray-200 shadow rounded-lg">
                <div className="absolute -top-10 right-0 flex justify-end">
                    <div className="w-[140px] h-[140px] rounded-full bg-gray-200 border-4 border-white shadow-md"></div>
                </div>
                <div className="pt-5 px-6 space-y-3 mt-12">
                    <div className="h-4 bg-gray-200 rounded w-2/4"></div>
                    <div className="h-3 bg-gray-200 rounded w-full"></div>
                    <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                    <div className="flex justify-between items-center mt-6">
                        <div className="h-4 w-16 bg-gray-200 rounded"></div>
                        <div className="h-6 w-6 bg-gray-200 rounded-full"></div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
        >
            <div className="mt-5 flex flex-wrap">
                {loading ? (
                    Array.from({ length: 6 }).map((_, idx) => (
                        <SkeletonCard key={idx} />
                    ))
                ) : currentMenus.length > 0 ? (
                    currentMenus.map((menu) => (
                        <div className="w-[93%] lg:mx-0 mx-auto md:w-1/2 lg:w-1/3 p-1 mt-16">
                            <div className="py-3 relative bg-white border h-[280px] border-gray-400 shadow-lg rounded-lg">
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
                                            <button
                                                onClick={() => {
                                                    if (!isLoggedIn) {
                                                        setShowLoginAlert(true);
                                                        return;
                                                    }
                                                    toggleWishlist(
                                                        menu.id,
                                                        "menu"
                                                    );
                                                }}
                                                className={`${
                                                    isInWishlist(
                                                        menu.id,
                                                        "menu"
                                                    )
                                                        ? "text-accentRed"
                                                        : "text-gray-500"
                                                }`}
                                            >
                                                <Heart
                                                    size={20}
                                                    fill={
                                                        isInWishlist(
                                                            menu.id,
                                                            "menu"
                                                        )
                                                            ? "red"
                                                            : "none"
                                                    }
                                                />
                                            </button>
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
                                        <button
                                            onClick={() =>
                                                addToCart(menu, "menu")
                                            }
                                        >
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
                ) : (
                    <div className="w-full flex justify-center py-6">
                        <div className="text-center font-medium text-accentRed">
                            <img
                                src={Empty}
                                alt="No data"
                                className="mx-auto w-60"
                            />
                            <h2 className="text-xl font-semibold text-gray-700 mb-2">
                                No data to show.
                            </h2>
                            <p className="text-gray-500 mb-4 text-sm">
                                The data you are looking for is empty.
                            </p>
                        </div>
                    </div>
                )}
            </div>
            <AlertDialog open={showLoginAlert} onOpenChange={setShowLoginAlert}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Login Required</AlertDialogTitle>
                        <AlertDialogDescription>
                            Please log in to add items to your wishlist.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel
                            onClick={() => setShowLoginAlert(false)}
                        >
                            Cancel
                        </AlertDialogCancel>
                        <AlertDialogAction onClick={() => navigate("/login")}>
                            Login
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
            <div className="mt-8 mx-auto">
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
