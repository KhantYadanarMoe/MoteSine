import { Search, Star, Heart, ShoppingCart } from "lucide-react";
import Mohinga from "../../../images/mohinga.png";
import { motion } from "framer-motion";
import { Input } from "../../Components/ui/input";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Liked() {
    const [wishlistItems, setWishlistItems] = useState([]);
    const [filter, setFilter] = useState("menu");

    const getWishlistItems = async () => {
        try {
            const res = await axios.get(`/api/wishlist?filter=${filter}`);
            setWishlistItems(res.data.items);
        } catch (error) {
            console.error("Failed to fetch wishlist items:", error);
        }
    };

    useEffect(() => {
        getWishlistItems();
    }, [filter]);

    return (
        <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="w-full lg:w-[68%] xl:w-[74%] flex flex-col gap-6 lg:ml-[32%] xl:ml-[26%] px-3 lg:px-7"
        >
            <div className="flex justify-between mt-6">
                <h1 className="text-2xl font-medium">Favorite</h1>
                <div className="relative w-full max-w-md hidden md:block">
                    <Search
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                        size={16}
                    />
                    <Input
                        type="text"
                        placeholder="Search..."
                        className="mt-1 border-gray-500 pl-8 pr-4"
                    />
                </div>
            </div>

            <ul className="mt-6 flex gap-3 items-center space-x-4">
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

            <div className="md:flex flex-wrap block">
                {wishlistItems.length === 0 ? (
                    <p className="h-[50vh] text-xl text-accentRed font-medium flex items-center justify-center mx-auto">
                        Your wishlist is empty.
                    </p>
                ) : (
                    wishlistItems.map((item) =>
                        item.item_type === "menu" ? (
                            <div
                                key={item.id}
                                className="md:w-1/2 w-[99%] md:mx-0 mx-auto p-1 mt-10"
                            >
                                <div className="relative py-3 bg-white border border-gray-400 shadow-lg rounded-lg">
                                    <div className="absolute -top-10 mr-3 right-0 flex justify-end">
                                        <img
                                            src={
                                                item.menu.image
                                                    ? `/storage/${item.menu.image}`
                                                    : Mohinga
                                            }
                                            alt={item.menu.title}
                                            className="w-[130px] md:w-[150px] object-cover rounded-full border-4 border-white shadow-md"
                                        />
                                    </div>
                                    <div className="pt-5 px-6">
                                        <h3 className="text-lg mt-7 md:mt-12 font-semibold">
                                            {item.menu.title}
                                        </h3>
                                        <p className="text-[13px] text-gray-600 mt-2 line-clamp-3">
                                            {item.menu.desc ||
                                                "No description available."}
                                        </p>
                                        <div className="flex items-center justify-between mt-4 md:mt-6">
                                            <span className="md:text-lg font-bold text-gray-800">
                                                {item.menu.price
                                                    ? `${Number(
                                                          item.menu.price
                                                      ).toFixed(2)} $`
                                                    : "N/A"}
                                            </span>
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
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div
                                key={item.id}
                                className="px-3 py-4 bg-white border border-gray-400 shadow-lg rounded-xl md:w-1/2 w-[99%] md:mx-0 mx-auto p-1 mt-10"
                            >
                                <div className="flex justify-between">
                                    <button
                                        onClick={() =>
                                            toggleWishlist(
                                                item.product.id,
                                                "product"
                                            )
                                        }
                                    >
                                        <Heart
                                            size={16}
                                            className="text-accentRed"
                                        />
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
                                    className="w-44 md:w-40 xl:w-36 h-auto object-cover mx-auto my-3"
                                />
                                <div className="flex justify-between items-center my-3">
                                    <div>
                                        <h1 className="font-medium mb-1">
                                            {item.product.name}
                                        </h1>
                                        <p className="text-sm font-medium">
                                            {item.product.price} $
                                        </p>
                                    </div>
                                    <button
                                        onClick={() =>
                                            addToCart(item.product, "product")
                                        }
                                        className="bg-accentRed hover:bg-hoverRed duration-300 rounded-full px-2 py-2"
                                    >
                                        <ShoppingCart
                                            size={16}
                                            className="text-white"
                                        />
                                    </button>
                                </div>
                            </div>
                        )
                    )
                )}
            </div>
        </motion.div>
    );
}
