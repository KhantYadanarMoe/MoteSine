import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Heart, Star, ShoppingCart } from "lucide-react";
import Mohinga from "../../../images/Mohinga.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Favorite() {
    // state to store menus
    let [menus, setMenus] = useState([]);

    // fetch data that send from backend
    let getMenus = async () => {
        let res = await axios.get("/api/menus");
        let data = res.data;
        setMenus(data.menus);
    };

    // check featured (1 or 0) to show only featured menu
    const featuredMenus = menus.filter((menu) => menu.featured);

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
                            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                                <div className="p-1 mt-10">
                                    <Card className="relative bg-white border h-[250px] border-gray-400 shadow-lg rounded-lg">
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
        </motion.div>
    );
}
