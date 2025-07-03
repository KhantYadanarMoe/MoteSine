import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/Components/ui/carousel";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/Components/ui/card";
import { Star } from "lucide-react";
import Profile from "../../../images/Profile.jpg";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

export default function Reviews() {
    // state to store reviews
    let [reviews, setReviews] = useState([]);

    // fetch data that send from backend
    let getReviews = async () => {
        let res = await axios.get("/api/reviews");
        let data = res.data;
        let allReviews = data.reviews;

        const visibilityMap = JSON.parse(
            localStorage.getItem("reviewVisibility") || "{}"
        );
        const publishedReviews = allReviews.filter((r) => visibilityMap[r.id]);

        setReviews(publishedReviews);
    };

    // call data fetching function in useEffect to run when user enter the page
    useEffect(() => {
        getReviews();
    }, []);

    const renderStars = (rating) => {
        const full = Math.floor(rating);
        const hasHalf = rating % 1 >= 0.25 && rating % 1 < 0.75;
        const empty = 5 - full - (hasHalf ? 1 : 0);
        const stars = [];

        for (let i = 0; i < full; i++) {
            stars.push(
                <Star
                    key={`full-${i}`}
                    size={20}
                    fill="currentColor"
                    className="text-accentYellow"
                />
            );
        }

        if (hasHalf) {
            stars.push(
                <Star
                    key="half"
                    size={20}
                    fill="currentColor"
                    className="text-accentYellow"
                    style={{ clipPath: "inset(0 50% 0 0)" }}
                />
            );
        }

        for (let i = 0; i < empty; i++) {
            stars.push(
                <Star
                    key={`empty-${i}`}
                    size={20}
                    className="text-accentYellow"
                />
            );
        }

        return stars;
    };

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
                        {reviews.map((review) => (
                            <CarouselItem
                                key={review.id}
                                className="md:basis-1/2 lg:basis-1/3"
                            >
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
                                                {review.name}
                                            </h3>
                                            <p className="text-[13px] text-gray-600 mt-2">
                                                {review.review}
                                            </p>
                                            <div className="flex gap-1 mt-3">
                                                {renderStars(review.rating)}
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
