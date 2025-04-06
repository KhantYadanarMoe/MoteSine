import At1 from "../../../images/at-1.jpg";
import At2 from "../../../images/at-2.jpg";
import At3 from "../../../images/at-3.jpg";
import At4 from "../../../images/at-4.jpg";
import At5 from "../../../images/at-5.jpg";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Profile from "../../../images/profile.jpg";

const images = [
    { src: At1, alt: "Image 1" },
    { src: At2, alt: "Image 2" },
    { src: At3, alt: "Image 3" },
    { src: At4, alt: "Image 4" },
    { src: At5, alt: "Image 5" },
];

export default function Reviews() {
    return (
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.4 }}
        >
            <div className="px-8 py-20">
                <h2 className="text-2xl font-medium mb-1 relative inline-block">
                    @Mote Sine
                </h2>
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-[95%] mx-auto"
                >
                    <CarouselContent>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1 mt-16">
                                <Card className="relative bg-white border border-gray-400 shadow-lg rounded-lg">
                                    <div className="absolute -top-10 ml-3 left-0 flex justify-end">
                                        <img
                                            src={Profile}
                                            alt="Profile"
                                            className="w-[110px] object-cover rounded-full border-4 border-white shadow-md"
                                        />
                                    </div>

                                    <CardContent className="pt-4 px-6">
                                        <h3 className="text-lg mt-16 font-semibold">
                                            Khant Yadanar Moe
                                        </h3>
                                        <p className="text-[13px] text-gray-600 mt-2">
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Dolorum quaerat ducimus sint commodi
                                            odit eos, quibusdam necessitatibus
                                            laudantium optio suscipit!
                                        </p>
                                        <div className="flex gap-1 mt-3">
                                            <Star
                                                size={20}
                                                fill="currentColor"
                                                className="text-accentYellow"
                                            />
                                            <Star
                                                size={20}
                                                fill="currentColor"
                                                className="text-accentYellow"
                                            />
                                            <Star
                                                size={20}
                                                fill="currentColor"
                                                className="text-accentYellow"
                                            />
                                            <Star
                                                size={20}
                                                fill="currentColor"
                                                className="text-accentYellow"
                                            />
                                            <Star
                                                size={20}
                                                className="text-accentYellow"
                                            />
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1 mt-16">
                                <Card className="relative bg-white border border-gray-400 shadow-lg rounded-lg">
                                    <div className="absolute -top-10 ml-3 left-0 flex justify-end">
                                        <img
                                            src={Profile}
                                            alt="Profile"
                                            className="w-[110px] object-cover rounded-full border-4 border-white shadow-md"
                                        />
                                    </div>

                                    <CardContent className="pt-4 px-6">
                                        <h3 className="text-lg mt-16 font-semibold">
                                            Khant Yadanar Moe
                                        </h3>
                                        <p className="text-[13px] text-gray-600 mt-2">
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Dolorum quaerat ducimus sint commodi
                                            odit eos, quibusdam necessitatibus
                                            laudantium optio suscipit!
                                        </p>
                                        <div className="flex gap-1 mt-3">
                                            <Star
                                                size={20}
                                                fill="currentColor"
                                                className="text-accentYellow"
                                            />
                                            <Star
                                                size={20}
                                                fill="currentColor"
                                                className="text-accentYellow"
                                            />
                                            <Star
                                                size={20}
                                                fill="currentColor"
                                                className="text-accentYellow"
                                            />
                                            <Star
                                                size={20}
                                                fill="currentColor"
                                                className="text-accentYellow"
                                            />
                                            <Star
                                                size={20}
                                                className="text-accentYellow"
                                            />
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1 mt-16">
                                <Card className="relative bg-white border border-gray-400 shadow-lg rounded-lg">
                                    <div className="absolute -top-10 ml-3 left-0 flex justify-end">
                                        <img
                                            src={Profile}
                                            alt="Profile"
                                            className="w-[110px] object-cover rounded-full border-4 border-white shadow-md"
                                        />
                                    </div>

                                    <CardContent className="pt-4 px-6">
                                        <h3 className="text-lg mt-16 font-semibold">
                                            Khant Yadanar Moe
                                        </h3>
                                        <p className="text-[13px] text-gray-600 mt-2">
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Dolorum quaerat ducimus sint commodi
                                            odit eos, quibusdam necessitatibus
                                            laudantium optio suscipit!
                                        </p>
                                        <div className="flex gap-1 mt-3">
                                            <Star
                                                size={20}
                                                fill="currentColor"
                                                className="text-accentYellow"
                                            />
                                            <Star
                                                size={20}
                                                fill="currentColor"
                                                className="text-accentYellow"
                                            />
                                            <Star
                                                size={20}
                                                fill="currentColor"
                                                className="text-accentYellow"
                                            />
                                            <Star
                                                size={20}
                                                fill="currentColor"
                                                className="text-accentYellow"
                                            />
                                            <Star
                                                size={20}
                                                className="text-accentYellow"
                                            />
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1 mt-16">
                                <Card className="relative bg-white border border-gray-400 shadow-lg rounded-lg">
                                    <div className="absolute -top-10 ml-3 left-0 flex justify-end">
                                        <img
                                            src={Profile}
                                            alt="Profile"
                                            className="w-[110px] object-cover rounded-full border-4 border-white shadow-md"
                                        />
                                    </div>

                                    <CardContent className="pt-4 px-6">
                                        <h3 className="text-lg mt-16 font-semibold">
                                            Khant Yadanar Moe
                                        </h3>
                                        <p className="text-[13px] text-gray-600 mt-2">
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Dolorum quaerat ducimus sint commodi
                                            odit eos, quibusdam necessitatibus
                                            laudantium optio suscipit!
                                        </p>
                                        <div className="flex gap-1 mt-3">
                                            <Star
                                                size={20}
                                                fill="currentColor"
                                                className="text-accentYellow"
                                            />
                                            <Star
                                                size={20}
                                                fill="currentColor"
                                                className="text-accentYellow"
                                            />
                                            <Star
                                                size={20}
                                                fill="currentColor"
                                                className="text-accentYellow"
                                            />
                                            <Star
                                                size={20}
                                                fill="currentColor"
                                                className="text-accentYellow"
                                            />
                                            <Star
                                                size={20}
                                                className="text-accentYellow"
                                            />
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1 mt-16">
                                <Card className="relative bg-white border border-gray-400 shadow-lg rounded-lg">
                                    <div className="absolute -top-10 ml-3 left-0 flex justify-end">
                                        <img
                                            src={Profile}
                                            alt="Profile"
                                            className="w-[110px] object-cover rounded-full border-4 border-white shadow-md"
                                        />
                                    </div>

                                    <CardContent className="pt-4 px-6">
                                        <h3 className="text-lg mt-16 font-semibold">
                                            Khant Yadanar Moe
                                        </h3>
                                        <p className="text-[13px] text-gray-600 mt-2">
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Dolorum quaerat ducimus sint commodi
                                            odit eos, quibusdam necessitatibus
                                            laudantium optio suscipit!
                                        </p>
                                        <div className="flex gap-1 mt-3">
                                            <Star
                                                size={20}
                                                fill="currentColor"
                                                className="text-accentYellow"
                                            />
                                            <Star
                                                size={20}
                                                fill="currentColor"
                                                className="text-accentYellow"
                                            />
                                            <Star
                                                size={20}
                                                fill="currentColor"
                                                className="text-accentYellow"
                                            />
                                            <Star
                                                size={20}
                                                fill="currentColor"
                                                className="text-accentYellow"
                                            />
                                            <Star
                                                size={20}
                                                className="text-accentYellow"
                                            />
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1 mt-16">
                                <Card className="relative bg-white border border-gray-400 shadow-lg rounded-lg">
                                    <div className="absolute -top-10 ml-3 left-0 flex justify-end">
                                        <img
                                            src={Profile}
                                            alt="Profile"
                                            className="w-[110px] object-cover rounded-full border-4 border-white shadow-md"
                                        />
                                    </div>

                                    <CardContent className="pt-4 px-6">
                                        <h3 className="text-lg mt-16 font-semibold">
                                            Khant Yadanar Moe
                                        </h3>
                                        <p className="text-[13px] text-gray-600 mt-2">
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Dolorum quaerat ducimus sint commodi
                                            odit eos, quibusdam necessitatibus
                                            laudantium optio suscipit!
                                        </p>
                                        <div className="flex gap-1 mt-3">
                                            <Star
                                                size={20}
                                                fill="currentColor"
                                                className="text-accentYellow"
                                            />
                                            <Star
                                                size={20}
                                                fill="currentColor"
                                                className="text-accentYellow"
                                            />
                                            <Star
                                                size={20}
                                                fill="currentColor"
                                                className="text-accentYellow"
                                            />
                                            <Star
                                                size={20}
                                                fill="currentColor"
                                                className="text-accentYellow"
                                            />
                                            <Star
                                                size={20}
                                                className="text-accentYellow"
                                            />
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1 mt-16">
                                <Card className="relative bg-white border border-gray-400 shadow-lg rounded-lg">
                                    <div className="absolute -top-10 ml-3 left-0 flex justify-end">
                                        <img
                                            src={Profile}
                                            alt="Profile"
                                            className="w-[110px] object-cover rounded-full border-4 border-white shadow-md"
                                        />
                                    </div>

                                    <CardContent className="pt-4 px-6">
                                        <h3 className="text-lg mt-16 font-semibold">
                                            Khant Yadanar Moe
                                        </h3>
                                        <p className="text-[13px] text-gray-600 mt-2">
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Dolorum quaerat ducimus sint commodi
                                            odit eos, quibusdam necessitatibus
                                            laudantium optio suscipit!
                                        </p>
                                        <div className="flex gap-1 mt-3">
                                            <Star
                                                size={20}
                                                fill="currentColor"
                                                className="text-accentYellow"
                                            />
                                            <Star
                                                size={20}
                                                fill="currentColor"
                                                className="text-accentYellow"
                                            />
                                            <Star
                                                size={20}
                                                fill="currentColor"
                                                className="text-accentYellow"
                                            />
                                            <Star
                                                size={20}
                                                fill="currentColor"
                                                className="text-accentYellow"
                                            />
                                            <Star
                                                size={20}
                                                className="text-accentYellow"
                                            />
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
