import { Search, Star, Heart, ShoppingCart } from "lucide-react";
import Mohinga from "../../../images/Mohinga.png";
import { motion } from "framer-motion";
import { Input } from "../../Components/ui/input";
import { useState, useEffect } from "react";
import {
    AlertDialog,
    AlertDialogTrigger,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogCancel,
} from "@/Components/ui/alert-dialog";
import axios from "axios";
import { useCart } from "@/contexts/CartContext";
import Empty from "../../../images/Empty.png";
import dayjs from "dayjs";
import { useSearch } from "@/contexts/SearchContext";

export default function Liked() {
    const [wishlistItems, setWishlistItems] = useState([]);
    const [filter, setFilter] = useState("menu");
    const { addToCart } = useCart();
    const { query, setQuery } = useSearch();

    const [openOutOfStock, setOpenOutOfStock] = useState(false);
    const [outOfStockProduct, setOutOfStockProduct] = useState(null);

    // state for loading
    const [loading, setLoading] = useState(false);

    const getWishlistItems = async () => {
        setLoading(true);
        try {
            const [wishlistRes, menusRes] = await Promise.all([
                axios.get(`/api/wishlist?filter=${filter}`),
                axios.get("/api/menus"),
            ]);

            const visibilityMap = JSON.parse(
                localStorage.getItem("categoryVisibility") || "{}"
            );

            const visibleMenuIds = new Set(
                menusRes.data.menus
                    .filter(
                        (menu) =>
                            menu.visibility == 1 &&
                            visibilityMap[menu.category.id]
                    )
                    .map((menu) => menu.id)
            );

            const filteredWishlist = wishlistRes.data.items.filter(
                (item) =>
                    item.item_type !== "menu" ||
                    visibleMenuIds.has(item.item_id)
            );

            setWishlistItems(filteredWishlist);
        } catch (error) {
            console.error("Failed to fetch wishlist items:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getWishlistItems();
    }, [filter]);

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

            // Refresh wishlist after toggling
            getWishlistItems();
        } catch (err) {
            console.error("Failed to toggle wishlist", err);
        }
    };

    const filteredFavorites = wishlistItems.filter((item) =>
        item.item_type === "menu"
            ? item.menu?.title?.toLowerCase().includes(query.toLowerCase())
            : item.item_type === "product"
            ? item.product?.name?.toLowerCase().includes(query.toLowerCase())
            : false
    );

    const MenuSkeleton = () => {
        return (
            <div className="w-full flex md:mx-0 mx-auto p-1 mt-10">
                <div className="w-full relative py-3 bg-white border h-[270px] border-gray-400 shadow-lg rounded-lg animate-pulse">
                    <div className="absolute -top-10 mr-3 right-0 flex justify-end">
                        <div className="w-44 md:w-40 xl:w-36 h-36 mx-auto my-3 rounded-full bg-gray-300" />
                    </div>
                    <div className="pt-5 px-6 space-y-3">
                        <div className="flex items-center justify-between mb-16">
                            <div className="flex gap-4">
                                <div className="w-5 h-5 bg-gray-300 rounded-full" />
                                <div className="w-12 h-5 bg-gray-300 rounded-md" />
                            </div>
                        </div>
                        <div className="mt-7 md:mt-12 h-4 w-1/3 bg-gray-300 rounded-md" />
                        <div className="h-3 bg-gray-200 rounded-md w-full" />
                        <div className="h-3 bg-gray-200 rounded-md w-5/6" />
                        <div className="flex items-center justify-between mt-4 md:mt-6">
                            <div className="w-20 h-5 bg-gray-300 rounded-md" />
                            <div className="w-6 h-6 bg-gray-300 rounded-full" />
                        </div>
                        <div className="h-3 w-32 bg-gray-200 rounded" />
                    </div>
                </div>
            </div>
        );
    };

    const ProductSkeleton = () => {
        return (
            <div className="px-3 py-2 bg-white border border-gray-400 shadow-lg rounded-xl w-full md:mx-0 mx-auto p-1 mt-10 animate-pulse">
                <div className="flex justify-between">
                    <div className="w-4 h-4 bg-gray-300 rounded-full" />
                    <div className="w-12 h-4 bg-gray-300 rounded-md" />
                </div>
                <div className="w-44 md:w-40 xl:w-36 h-52 md:h-48 xl:h-40 bg-gray-300 mx-auto my-3 rounded-md" />
                <div className="flex justify-between items-center my-3">
                    <div className="space-y-2">
                        <div className="h-4 w-28 bg-gray-300 rounded-md" />
                        <div className="h-4 w-20 bg-gray-300 rounded-md" />
                    </div>
                    <div className="flex flex-col items-end gap-2">
                        <div className="h-5 w-24 bg-gray-200 rounded-full" />
                        <div className="w-8 h-8 bg-gray-300 rounded-full" />
                    </div>
                </div>
                <div className="h-3 w-32 bg-gray-200 rounded" />
            </div>
        );
    };

    return (
        <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="w-full flex flex-col gap-6 px-3 lg:px-7 py-6"
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
                            onChange={(e) => setQuery(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            <ul className="mt-4 flex gap-3 items-center space-x-4">
                <li>
                    <button
                        onClick={() => setFilter("menu")}
                        to=""
                        className="relative hover:text-gray-950 group"
                    >
                        Menu
                        <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-accentRed transition-all duration-300 group-hover:w-full"></span>
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => setFilter("product")}
                        className="relative hover:text-gray-950 group"
                    >
                        Product
                        <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-accentRed transition-all duration-300 group-hover:w-full"></span>
                    </button>
                </li>
            </ul>

            <div
                className={`grid gap-4 px-2 md:px-0 ${
                    filteredFavorites.some((i) => filter === "menu")
                        ? "grid-cols-1 sm:grid-cols-2"
                        : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
                }`}
            >
                {loading ? (
                    filter === "menu" ? (
                        [...Array(2)].map((_, i) => <MenuSkeleton key={i} />)
                    ) : (
                        [...Array(3)].map((_, i) => <ProductSkeleton key={i} />)
                    )
                ) : filteredFavorites.length === 0 ? (
                    <div className="lg:pt-24 lg:w-[68%] xl:w-[74%] lg:ml-[32%] xl:ml-[26%] pt-20  min-h-screen absolute inset-0 z-10  bg-white flex flex-col items-center justify-center text-center font-medium text-accentRed h-full">
                        <img
                            src={Empty}
                            alt="No data"
                            className="mx-auto w-60"
                        />
                        <h2 className="text-xl font-semibold text-gray-700 mb-2">
                            Nothing in your wishlist
                        </h2>
                        <p className="text-gray-500 mb-4 text-sm">
                            You didn't add anything in your wishlist.
                        </p>
                    </div>
                ) : (
                    filteredFavorites.map((item) =>
                        item.item_type === "menu" ? (
                            <div
                                key={item.id}
                                className="w-full flex md:mx-0 mx-auto p-1 mt-10"
                            >
                                <div className="relative py-3 bg-white border h-[270px] border-gray-400 shadow-lg rounded-lg">
                                    <div className="absolute -top-10 mr-3 right-0 flex justify-end">
                                        {item.menu?.image ? (
                                            <img
                                                src={`/storage/${item.menu.image}`}
                                                alt={
                                                    item.menu.title ||
                                                    "Product image"
                                                }
                                                className="w-44 md:w-40 xl:w-36 h-auto object-cover mx-auto my-3 rounded-full"
                                            />
                                        ) : (
                                            <img
                                                src={Mohinga} // fallback image
                                                alt="Default product"
                                                className="w-44 md:w-40 xl:w-36 h-auto object-cover mx-auto my-3"
                                            />
                                        )}
                                    </div>
                                    <div className="pt-5 px-6">
                                        <div className="flex items-center justify-between mb-3">
                                            <div className="flex gap-4">
                                                <button
                                                    onClick={() =>
                                                        toggleWishlist(
                                                            item.menu.id,
                                                            "menu"
                                                        )
                                                    }
                                                    className="text-accentRed"
                                                >
                                                    <Heart
                                                        size={20}
                                                        fill="red"
                                                    />{" "}
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
                                        <h3 className="text-lg mt-7 md:mt-12 font-semibold">
                                            {item.menu.title}
                                        </h3>
                                        <p className="text-[13px] text-gray-600 mt-2 line-clamp-3">
                                            {item.menu.desc ||
                                                "No description available."}
                                        </p>
                                        <div className="flex items-center justify-between mt-4 md:mt-6">
                                            <p className="text-sm font-medium">
                                                {item.menu.promotion &&
                                                new Date() >=
                                                    new Date(
                                                        item.menu.startDate
                                                    ) &&
                                                new Date() <=
                                                    new Date(
                                                        item.menu.endDate
                                                    ) ? (
                                                    <div className="flex items-center gap-1">
                                                        <span className="text-red-600 font-semibold">
                                                            {(
                                                                item.menu
                                                                    .price -
                                                                (item.menu
                                                                    .price *
                                                                    item.menu
                                                                        .promotion) /
                                                                    100
                                                            ).toFixed(2)}{" "}
                                                            $
                                                        </span>
                                                        <span className="line-through text-sm text-gray-500">
                                                            {item.menu.price} $
                                                        </span>
                                                    </div>
                                                ) : (
                                                    <span>
                                                        {item.menu.price} $
                                                    </span>
                                                )}
                                            </p>
                                            <button
                                                onClick={() =>
                                                    addToCart(item.menu, "menu")
                                                }
                                            >
                                                <ShoppingCart
                                                    size={24}
                                                    className="text-accentRed"
                                                />
                                            </button>
                                        </div>
                                        {item.menu.promotion &&
                                            new Date() >=
                                                new Date(item.menu.startDate) &&
                                            new Date() <=
                                                new Date(item.menu.endDate) && (
                                                <p className="text-xs text-gray-500">
                                                    Promo period:{" "}
                                                    {dayjs(
                                                        item.menu.startDate
                                                    ).format("MMM D")}{" "}
                                                    -{" "}
                                                    {dayjs(
                                                        item.menu.endDate
                                                    ).format("MMM D")}
                                                </p>
                                            )}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div
                                key={item.id}
                                className="px-3 py-2 bg-white border border-gray-400 shadow-lg rounded-xl w-full md:mx-0 mx-auto p-1 mt-10"
                            >
                                <div className="flex justify-between">
                                    <button
                                        onClick={() =>
                                            toggleWishlist(
                                                item.product.id,
                                                "product"
                                            )
                                        }
                                        className="text-accentRed"
                                    >
                                        <Heart size={16} fill="red" />
                                    </button>
                                    <a
                                        href="#"
                                        className="text-sm flex items-center gap-1 text-accentYellow"
                                    >
                                        <Star size={16} fill="currentColor" />
                                        {item.product.rating}
                                    </a>
                                </div>
                                <img
                                    src={`/storage/${item.product.image}`}
                                    alt={item.product.name}
                                    className="w-44 md:w-40 xl:w-36 h-52 md:h-48 xl:h-40 object-cover mx-auto my-3"
                                />
                                <div className="flex justify-between items-center my-3">
                                    <div>
                                        <h1 className="font-medium mb-1">
                                            {item.product.name}
                                        </h1>
                                        <p className="text-sm font-medium">
                                            {item.product.promotion &&
                                            new Date() >=
                                                new Date(
                                                    item.product.startDate
                                                ) &&
                                            new Date() <=
                                                new Date(
                                                    item.product.endDate
                                                ) ? (
                                                <div className="flex items-center gap-1">
                                                    <span className="text-red-600 font-semibold">
                                                        {(
                                                            item.product.price -
                                                            (item.product
                                                                .price *
                                                                item.product
                                                                    .promotion) /
                                                                100
                                                        ).toFixed(2)}{" "}
                                                        $
                                                    </span>
                                                    <span className="line-through text-sm text-gray-500">
                                                        {item.product.price} $
                                                    </span>
                                                </div>
                                            ) : (
                                                <span>
                                                    {item.product.price} $
                                                </span>
                                            )}
                                        </p>
                                    </div>
                                    <div className="flex flex-col items-end gap-2">
                                        <div>
                                            {item.product.stock === 0 && (
                                                <span className="px-1 py-1 text-xs bg-red-100 text-accentRed rounded-md">
                                                    Out of Stock
                                                </span>
                                            )}
                                        </div>
                                        <div className="">
                                            {item.product.stock > 0 ? (
                                                <button
                                                    onClick={() =>
                                                        addToCart(
                                                            item.product,
                                                            "product"
                                                        )
                                                    }
                                                    className="p-2"
                                                >
                                                    <ShoppingCart
                                                        size={20}
                                                        className="text-accentRed"
                                                    />
                                                </button>
                                            ) : (
                                                <button
                                                    onClick={() => {
                                                        setOpenOutOfStock(true);
                                                        setOutOfStockProduct(
                                                            item.product
                                                        );
                                                    }}
                                                    className="p-2"
                                                >
                                                    <ShoppingCart
                                                        size={20}
                                                        className="text-accentRed opacity-50"
                                                    />
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                    <AlertDialog
                                        open={openOutOfStock}
                                        onOpenChange={setOpenOutOfStock}
                                    >
                                        <AlertDialogContent>
                                            <AlertDialogHeader>
                                                <AlertDialogTitle>
                                                    Out of Stock
                                                </AlertDialogTitle>
                                                <AlertDialogDescription>
                                                    {outOfStockProduct?.name} is
                                                    currently out of stock.
                                                    We’re working to restock it
                                                    as quickly as possible.
                                                    Thank you for your patience!
                                                </AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                                <AlertDialogCancel>
                                                    Okay
                                                </AlertDialogCancel>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>
                                </div>
                                {item.product.promotion &&
                                    new Date() >=
                                        new Date(item.product.startDate) &&
                                    new Date() <=
                                        new Date(item.product.endDate) && (
                                        <p className="text-xs text-gray-500">
                                            Promo period:{" "}
                                            {dayjs(
                                                item.product.startDate
                                            ).format("MMM D")}{" "}
                                            -{" "}
                                            {dayjs(item.product.endDate).format(
                                                "MMM D"
                                            )}
                                        </p>
                                    )}
                            </div>
                        )
                    )
                )}
            </div>
        </motion.div>
    );
}
