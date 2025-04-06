import Product from "../../../images/Product.png";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Heart, Star, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

export default function Promotions() {
    return (
        <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
        >
            <div className="w-[96%] lg:w-[90%] mx-auto py-12 px-3 block md:flex items-center justify-center">
                <div className="w-full md:w-1/2 lg:w-1/3 mb-5">
                    <h1 className="text-4xl font-medium text-accentGreen">
                        Up to 50% off
                    </h1>
                    <h1 className="text-4xl font-medium text-accentGreen">
                        Promotion
                    </h1>
                    <p className="text-gray-800 text-xs lg:text-sm mt-3">
                        Enjoy up to 50% off! From local flavors to local
                        masterpieces, bring home the true taste of Burma. Savor
                        the perfect blend of flavors and traditions in every
                        bite.
                    </p>
                </div>
                <div className="w-full md:w-1/2 lg:w-2/3 md:ml-5">
                    <Carousel
                        opts={{
                            align: "start",
                        }}
                    >
                        <CarouselContent>
                            <CarouselItem className="basis-[85%] md:basis-[75%] lg:basis-1/2">
                                <div className="px-3 py-4 bg-white border border-gray-400 shadow-lg w-[100%] lg:w-full md:mx-auto rounded-xl">
                                    <div className="flex justify-between">
                                        <a href="">
                                            <Heart
                                                size={16}
                                                className="text-accentRed"
                                            />
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
                                        className="w-36 md:w-28 xl:w-28 h-auto object-cover mx-auto my-3"
                                    />
                                    <div className="flex justify-between items-center my-3">
                                        <div>
                                            <h1 className="font-medium mb-1">
                                                Eain Chat Mote Hti
                                            </h1>
                                            <p className="text-sm font-medium">
                                                6.12 $
                                            </p>
                                        </div>
                                        <button className="p-2">
                                            <ShoppingCart
                                                size={20}
                                                className="text-accentRed"
                                            />
                                        </button>
                                    </div>
                                </div>
                            </CarouselItem>
                            <CarouselItem className="basis-[85%] md:basis-[75%] lg:basis-1/2">
                                <div className="px-3 py-4 bg-white border border-gray-400 shadow-lg w-[100%] lg:w-full md:mx-auto rounded-xl">
                                    <div className="flex justify-between">
                                        <a href="">
                                            <Heart
                                                size={16}
                                                className="text-accentRed"
                                            />
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
                                        className="w-36 md:w-28 xl:w-28 h-auto object-cover mx-auto my-3"
                                    />
                                    <div className="flex justify-between items-center my-3">
                                        <div>
                                            <h1 className="font-medium mb-1">
                                                Eain Chat Mote Hti
                                            </h1>
                                            <p className="text-sm font-medium">
                                                6.12 $
                                            </p>
                                        </div>
                                        <button className="p-2">
                                            <ShoppingCart
                                                size={20}
                                                className="text-accentRed"
                                            />
                                        </button>
                                    </div>
                                </div>
                            </CarouselItem>
                            <CarouselItem className="basis-[85%] md:basis-[75%] lg:basis-1/2">
                                <div className="px-3 py-4 bg-white border border-gray-400 shadow-lg w-[100%] lg:w-full md:mx-auto rounded-xl">
                                    <div className="flex justify-between">
                                        <a href="">
                                            <Heart
                                                size={16}
                                                className="text-accentRed"
                                            />
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
                                        className="w-36 md:w-28 xl:w-28 h-auto object-cover mx-auto my-3"
                                    />
                                    <div className="flex justify-between items-center my-3">
                                        <div>
                                            <h1 className="font-medium mb-1">
                                                Eain Chat Mote Hti
                                            </h1>
                                            <p className="text-sm font-medium">
                                                6.12 $
                                            </p>
                                        </div>
                                        <button className="p-2">
                                            <ShoppingCart
                                                size={20}
                                                className="text-accentRed"
                                            />
                                        </button>
                                    </div>
                                </div>
                            </CarouselItem>
                            <CarouselItem className="basis-[85%] md:basis-[75%] lg:basis-1/2">
                                <div className="px-3 py-4 bg-white border border-gray-400 shadow-lg w-[100%] lg:w-full md:mx-auto rounded-xl">
                                    <div className="flex justify-between">
                                        <a href="">
                                            <Heart
                                                size={16}
                                                className="text-accentRed"
                                            />
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
                                        className="w-36 md:w-28 xl:w-28 h-auto object-cover mx-auto my-3"
                                    />
                                    <div className="flex justify-between items-center my-3">
                                        <div>
                                            <h1 className="font-medium mb-1">
                                                Eain Chat Mote Hti
                                            </h1>
                                            <p className="text-sm font-medium">
                                                6.12 $
                                            </p>
                                        </div>
                                        <button className="p-2">
                                            <ShoppingCart
                                                size={20}
                                                className="text-accentRed"
                                            />
                                        </button>
                                    </div>
                                </div>
                            </CarouselItem>
                            <CarouselItem className="basis-[85%] md:basis-[75%] lg:basis-1/2">
                                <div className="px-3 py-4 bg-white border border-gray-400 shadow-lg w-[100%] lg:w-full md:mx-auto rounded-xl">
                                    <div className="flex justify-between">
                                        <a href="">
                                            <Heart
                                                size={16}
                                                className="text-accentRed"
                                            />
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
                                        className="w-36 md:w-28 xl:w-28 h-auto object-cover mx-auto my-3"
                                    />
                                    <div className="flex justify-between items-center my-3">
                                        <div>
                                            <h1 className="font-medium mb-1">
                                                Eain Chat Mote Hti
                                            </h1>
                                            <p className="text-sm font-medium">
                                                6.12 $
                                            </p>
                                        </div>
                                        <button className="p-2">
                                            <ShoppingCart
                                                size={20}
                                                className="text-accentRed"
                                            />
                                        </button>
                                    </div>
                                </div>
                            </CarouselItem>
                            <CarouselItem className="basis-[85%] md:basis-[75%] lg:basis-1/2">
                                <div className="px-3 py-4 bg-white border border-gray-400 shadow-lg w-[100%] lg:w-full md:mx-auto rounded-xl">
                                    <div className="flex justify-between">
                                        <a href="">
                                            <Heart
                                                size={16}
                                                className="text-accentRed"
                                            />
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
                                        className="w-36 md:w-28 xl:w-28 h-auto object-cover mx-auto my-3"
                                    />
                                    <div className="flex justify-between items-center my-3">
                                        <div>
                                            <h1 className="font-medium mb-1">
                                                Eain Chat Mote Hti
                                            </h1>
                                            <p className="text-sm font-medium">
                                                6.12 $
                                            </p>
                                        </div>
                                        <button className="p-2">
                                            <ShoppingCart
                                                size={20}
                                                className="text-accentRed"
                                            />
                                        </button>
                                    </div>
                                </div>
                            </CarouselItem>
                        </CarouselContent>
                        <div className="flex justify-end w-full mt-8">
                            <div className="flex gap-1">
                                <CarouselPrevious className="static md:inline-flex p-2 rounded-full bg-accentRed text-white hover:bg-hoverRed hover:text-white duration-300" />
                                <CarouselNext className="static md:inline-flex p-2 rounded-full bg-accentRed text-white hover:bg-hoverRed hover:text-white duration-300" />
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>
        </motion.div>
    );
}
