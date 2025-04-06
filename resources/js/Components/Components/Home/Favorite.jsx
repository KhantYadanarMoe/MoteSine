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

export default function Favorite() {
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
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1 mt-10">
                                <Card className="relative bg-white border border-gray-400 shadow-lg rounded-lg">
                                    <div className="absolute -top-10 mr-3 right-0 flex justify-end">
                                        <img
                                            src={Mohinga}
                                            alt="Mohinga"
                                            className="w-[150px] object-cover rounded-full border-4 border-white shadow-md"
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
                                        <h3 className="text-lg mt-12 font-semibold">
                                            Mohinga
                                        </h3>
                                        <p className="text-[13px] text-gray-600 mt-2">
                                            a popular Burmese dish featuring
                                            rice noodles in a flavorful fish
                                            broth, garnished with herbs, lime,
                                            and crispy fritters.
                                        </p>
                                        <div className="flex items-center justify-between mt-6">
                                            <span className="text-lg font-bold text-gray-800">
                                                6.12 $
                                            </span>
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
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1 mt-10">
                                <Card className="relative bg-white border border-gray-400 shadow-lg rounded-lg">
                                    <div className="absolute -top-10 mr-3 right-0 flex justify-end">
                                        <img
                                            src={Mohinga}
                                            alt="Mohinga"
                                            className="w-[150px] object-cover rounded-full border-4 border-white shadow-md"
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
                                        <h3 className="text-lg mt-12 font-semibold">
                                            Mohinga
                                        </h3>
                                        <p className="text-[13px] text-gray-600 mt-2">
                                            a popular Burmese dish featuring
                                            rice noodles in a flavorful fish
                                            broth, garnished with herbs, lime,
                                            and crispy fritters.
                                        </p>
                                        <div className="flex items-center justify-between mt-6">
                                            <span className="text-lg font-bold text-gray-800">
                                                6.12 $
                                            </span>
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
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1 mt-10">
                                <Card className="relative bg-white border border-gray-400 shadow-lg rounded-lg">
                                    <div className="absolute -top-10 mr-3 right-0 flex justify-end">
                                        <img
                                            src={Mohinga}
                                            alt="Mohinga"
                                            className="w-[150px] object-cover rounded-full border-4 border-white shadow-md"
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
                                        <h3 className="text-lg mt-12 font-semibold">
                                            Mohinga
                                        </h3>
                                        <p className="text-[13px] text-gray-600 mt-2">
                                            a popular Burmese dish featuring
                                            rice noodles in a flavorful fish
                                            broth, garnished with herbs, lime,
                                            and crispy fritters.
                                        </p>
                                        <div className="flex items-center justify-between mt-6">
                                            <span className="text-lg font-bold text-gray-800">
                                                6.12 $
                                            </span>
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
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1 mt-10">
                                <Card className="relative bg-white border border-gray-400 shadow-lg rounded-lg">
                                    <div className="absolute -top-10 mr-3 right-0 flex justify-end">
                                        <img
                                            src={Mohinga}
                                            alt="Mohinga"
                                            className="w-[150px] object-cover rounded-full border-4 border-white shadow-md"
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
                                        <h3 className="text-lg mt-12 font-semibold">
                                            Mohinga
                                        </h3>
                                        <p className="text-[13px] text-gray-600 mt-2">
                                            a popular Burmese dish featuring
                                            rice noodles in a flavorful fish
                                            broth, garnished with herbs, lime,
                                            and crispy fritters.
                                        </p>
                                        <div className="flex items-center justify-between mt-6">
                                            <span className="text-lg font-bold text-gray-800">
                                                6.12 $
                                            </span>
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
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1 mt-10">
                                <Card className="relative bg-white border border-gray-400 shadow-lg rounded-lg">
                                    <div className="absolute -top-10 mr-3 right-0 flex justify-end">
                                        <img
                                            src={Mohinga}
                                            alt="Mohinga"
                                            className="w-[150px] object-cover rounded-full border-4 border-white shadow-md"
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
                                        <h3 className="text-lg mt-12 font-semibold">
                                            Mohinga
                                        </h3>
                                        <p className="text-[13px] text-gray-600 mt-2">
                                            a popular Burmese dish featuring
                                            rice noodles in a flavorful fish
                                            broth, garnished with herbs, lime,
                                            and crispy fritters.
                                        </p>
                                        <div className="flex items-center justify-between mt-6">
                                            <span className="text-lg font-bold text-gray-800">
                                                6.12 $
                                            </span>
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
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1 mt-10">
                                <Card className="relative bg-white border border-gray-400 shadow-lg rounded-lg">
                                    <div className="absolute -top-10 mr-3 right-0 flex justify-end">
                                        <img
                                            src={Mohinga}
                                            alt="Mohinga"
                                            className="w-[150px] object-cover rounded-full border-4 border-white shadow-md"
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
                                        <h3 className="text-lg mt-12 font-semibold">
                                            Mohinga
                                        </h3>
                                        <p className="text-[13px] text-gray-600 mt-2">
                                            a popular Burmese dish featuring
                                            rice noodles in a flavorful fish
                                            broth, garnished with herbs, lime,
                                            and crispy fritters.
                                        </p>
                                        <div className="flex items-center justify-between mt-6">
                                            <span className="text-lg font-bold text-gray-800">
                                                6.12 $
                                            </span>
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
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1 mt-10">
                                <Card className="relative bg-white border border-gray-400 shadow-lg rounded-lg">
                                    <div className="absolute -top-10 mr-3 right-0 flex justify-end">
                                        <img
                                            src={Mohinga}
                                            alt="Mohinga"
                                            className="w-[150px] object-cover rounded-full border-4 border-white shadow-md"
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
                                        <h3 className="text-lg mt-12 font-semibold">
                                            Mohinga
                                        </h3>
                                        <p className="text-[13px] text-gray-600 mt-2">
                                            a popular Burmese dish featuring
                                            rice noodles in a flavorful fish
                                            broth, garnished with herbs, lime,
                                            and crispy fritters.
                                        </p>
                                        <div className="flex items-center justify-between mt-6">
                                            <span className="text-lg font-bold text-gray-800">
                                                6.12 $
                                            </span>
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
                    </CarouselContent>
                    <CarouselPrevious className="hidden md:inline-flex" />
                    <CarouselNext className="hidden md:inline-flex" />
                </Carousel>
            </div>
        </motion.div>
    );
}
