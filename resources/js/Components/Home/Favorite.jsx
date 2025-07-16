import { Card, CardContent } from "@/Components/ui/card";
import { Button } from "@/Components/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/Components/ui/carousel";
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
import { Heart, Star, ShoppingCart } from "lucide-react";
import Mohinga from "../../../images/Mohinga.png";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "@/contexts/CartContext";
import dayjs from "dayjs";
import { useAuth } from "@/contexts/AuthContext";

export default function Favorite() {
    // state to store menus
    let [menus, setMenus] = useState([]);

    const { addToCart } = useCart();

    const [wishlistItems, setWishlistItems] = useState([]);

    const [showLoginAlert, setShowLoginAlert] = useState(false);

    const { user } = useAuth();
    const isLoggedIn = !!user;

    const navigate = useNavigate();

    // fetch data that send from backend
    // fetch data that send from backend
    const getMenus = async () => {
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
        }
    };

    // check featured (1 or 0) to show only featured menu
    // const featuredMenus = menus.filter((menu) => menu.featured);

    const featuredMenus = menus.filter((menu) => Number(menu.featured));

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

    return (
        <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
        >
            <div className="px-3 md:px-10 py-10">
                <div className="flex justify-between mb-8">
                    <div>
                        <h2 className="text-2xl font-semibold mb-1 relative inline-block">
                            Customers' Picks
                        </h2>
                        <div className="flex items-center">
                            <div className="w-28 h-[2px] bg-accentRed"></div>
                            <div className="w-1 h-1 bg-accentRed rounded-full ml-2"></div>
                        </div>
                    </div>
                    <Link to="/menu">
                        <Button
                            variant="default"
                            className="rounded-lg bg-accentRed text-white hover:bg-hoverRed duration-300"
                        >
                            Show all menu
                        </Button>
                    </Link>
                </div>
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-[95%] mx-auto"
                >
                    <CarouselContent>
                        {featuredMenus.map((menu) => (
                            <CarouselItem
                                key={menu.id}
                                className="md:basis-1/2 lg:basis-1/3"
                            >
                                <div className="p-1 mt-10">
                                    <Card className="relative bg-white border h-[260px] border-gray-400 shadow-lg rounded-lg">
                                        <div className="absolute -top-10 mr-3 right-0 flex justify-end">
                                            <img
                                                src={`/storage/${menu.image}`}
                                                alt={menu.title}
                                                className="w-[140px] h-[140px] object-cover rounded-full border-4 border-white shadow-md"
                                            />
                                        </div>

                                        <CardContent className="pt-5 px-6">
                                            <div className="flex items-center justify-between mb-3">
                                                <div className="flex gap-4">
                                                    <button
                                                        onClick={() => {
                                                            if (!isLoggedIn) {
                                                                setShowLoginAlert(
                                                                    true
                                                                );
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
                                                new Date() <=
                                                    new Date(menu.endDate) ? (
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
                                                        {dayjs(
                                                            menu.startDate
                                                        ).format("MMM D")}{" "}
                                                        -{" "}
                                                        {dayjs(
                                                            menu.endDate
                                                        ).format("MMM D")}
                                                    </p>
                                                )}
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden md:inline-flex" />
                    <CarouselNext className="hidden md:inline-flex" />
                </Carousel>
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
        </motion.div>
    );
}
