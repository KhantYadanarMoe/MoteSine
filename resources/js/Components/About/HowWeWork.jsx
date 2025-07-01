import Garden from "../../../images/Gardening.jpg";
import Vegetables from "../../../images/fresh.jpg";
import Cooking from "../../../images/Cooking-1.jpg";
import Serving from "../../../images/Serving.jpg";
import { Card, CardContent } from "@/Components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/Components/ui/carousel";
import HeroBg from "../../../images/hero-bg.jpg";
import { motion } from "framer-motion";

export default function HowWeWork() {
    return (
        <motion.div
            className="relative"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            id="Work"
        >
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `url(${HeroBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: 0.6,
                    zIndex: -1,
                }}
            ></div>
            <div className="w-[96%] lg:w-[90%] mx-auto py-12 px-3 block md:flex items-center justify-center">
                <div className="w-full md:w-1/2 lg:w-1/3 mb-5 md:mb-16">
                    <div>
                        <h2 className="text-3xl font-medium mb-1 relative inline-block">
                            How we work
                        </h2>
                        <div className="flex items-center">
                            <div className="w-40 h-[2px] bg-accentRed"></div>
                            <div className="w-1 h-1 bg-accentRed rounded-full ml-2"></div>
                        </div>
                    </div>
                    <p className="text-gray-800 mt-5 md:mt-8">
                        We describe our process step by step in case you want to
                        know where your food comes from. We ensure quality at
                        every stage. Transparency matters to us, so you can
                        enjoy every bite with confidence.
                    </p>
                </div>
                <div className="w-full md:w-1/2 lg:w-2/3">
                    <Carousel
                        opts={{
                            align: "start",
                        }}
                        className="w-[95%] mx-auto"
                    >
                        <CarouselContent>
                            <CarouselItem className="lg:basis-1/2">
                                <div className="p-1 mt-8">
                                    <Card className="relative h-60 bg-white border border-gray-400 shadow-lg rounded-lg">
                                        <div className="absolute -top-7 ml-5">
                                            <img
                                                src={Garden}
                                                alt=""
                                                className="rounded-full w-32 h-32 border-2 border-accentRed object-cover"
                                            />
                                        </div>
                                        <CardContent className="pt-9 px-5">
                                            <h3 className="text-lg mt-20 font-semibold">
                                                Supporting Local Farmers
                                            </h3>
                                            <p className="text-[13px] text-gray-600 mt-2">
                                                We source fresh ingredients
                                                directly from local farms to
                                                support our community and ensure
                                                the highest quality produce.
                                            </p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                            <CarouselItem className="lg:basis-1/2">
                                <div className="p-1 mt-8">
                                    <Card className="relative h-60 bg-white border border-gray-400 shadow-lg rounded-lg">
                                        <div className="absolute -top-7 ml-5">
                                            <img
                                                src={Vegetables}
                                                alt=""
                                                className="rounded-full w-32 h-32 border-2 border-accentRed object-cover"
                                            />
                                        </div>
                                        <CardContent className="pt-9 px-5">
                                            <h3 className="text-lg mt-20 font-semibold">
                                                Fresh & Vibrant Vegetables
                                            </h3>
                                            <p className="text-[13px] text-gray-600 mt-2">
                                                Carefully handpicked vegetables
                                                bring both flavor and nutrition
                                                to every dish we serve.
                                            </p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                            <CarouselItem className="lg:basis-1/2">
                                <div className="p-1 mt-8">
                                    <Card className="relative h-60 bg-white border border-gray-400 shadow-lg rounded-lg">
                                        <div className="absolute -top-7 ml-5">
                                            <img
                                                src={Cooking}
                                                alt=""
                                                className="rounded-full w-32 h-32 border-2 border-accentRed object-cover"
                                            />
                                        </div>
                                        <CardContent className="pt-9 px-5">
                                            <h3 className="text-lg mt-20 font-semibold">
                                                Cooking with Care
                                            </h3>
                                            <p className="text-[13px] text-gray-600 mt-2">
                                                Our chefs combine traditional
                                                recipes with passion, crafting
                                                every dish with precision and
                                                love.
                                            </p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                            <CarouselItem className="lg:basis-1/2">
                                <div className="p-1 mt-8">
                                    <Card className="relative h-60 bg-white border border-gray-400 shadow-lg rounded-lg">
                                        <div className="absolute -top-7 ml-5">
                                            <img
                                                src={Serving}
                                                alt=""
                                                className="rounded-full w-32 h-32 border-2 border-accentRed object-cover"
                                            />
                                        </div>
                                        <CardContent className="pt-9 px-5">
                                            <h3 className="text-lg mt-20 font-semibold">
                                                Serving Memories
                                            </h3>
                                            <p className="text-[13px] text-gray-600 mt-2">
                                                Finally, our dishes are served
                                                with a touch of elegance,
                                                creating unforgettable dining
                                                moments for you and your loved
                                                ones.
                                            </p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        </CarouselContent>
                        {/* Carousel Navigation */}
                        {/* Wrap the buttons in a flex container */}
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
