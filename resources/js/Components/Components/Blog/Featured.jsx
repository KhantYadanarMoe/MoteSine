import BlogImg from "../../../images/Vegetables.jpg";
import { CalendarFold, Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

export default function Featured() {
    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
        >
            <div className="mt-16">
                <div className="flex justify-between mb-6">
                    <div>
                        <h2 className="text-xl md:text-2xl font-medium mb-1 relative inline-block">
                            Blogs you might like
                        </h2>
                        <div className="flex items-center">
                            <div className="w-10 md:w-20 h-[2px] bg-accentRed"></div>
                            <div className="w-1 h-1 bg-accentRed rounded-full ml-2"></div>
                        </div>
                    </div>
                    <Link to="/blogs">
                        <Button className="bg-accentRed hover:bg-hoverRed duration-300">
                            View All Blogs
                        </Button>
                    </Link>
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                    <div className="mb-5">
                        <div className="xl:w-[97%] mx-auto">
                            <img
                                src={BlogImg}
                                alt=""
                                className="w-[100%] h-52 lg:h-48 xl:h-52 object-cover rounded-md"
                            />
                            <div className="mt-3">
                                <h1 className="text-lg font-medium">
                                    Where we take our ingredients & how we
                                    prepare to cook
                                </h1>
                                <p className="text-gray-700 mt-2 text-sm">
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Optio, modi accusamus
                                    ratione dolorem inventore sapiente?
                                </p>
                                <div className="flex gap-5 mt-4">
                                    <div className="flex gap-1 items-center text-sm">
                                        <CalendarFold
                                            size={16}
                                            className="text-gray-800"
                                        />
                                        <p className="text-gray-800">
                                            20 Jan 2025
                                        </p>
                                    </div>
                                    <div className="flex gap-1 items-center text-sm">
                                        <Clock
                                            size={16}
                                            className="text-gray-800"
                                        />
                                        <p className="text-gray-800">
                                            3 mins read
                                        </p>
                                    </div>
                                </div>
                                <Link to="/blog">
                                    <button className="text-accentRed hover:text-hoverRed duration-300 flex gap-1 items-center mt-4">
                                        Read More{" "}
                                        <ArrowRight
                                            size={16}
                                            className=" -mb-1"
                                        />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="mb-5">
                        <div className="xl:w-[97%] mx-auto">
                            <img
                                src={BlogImg}
                                alt=""
                                className="w-[100%] h-52 lg:h-48 xl:h-52 object-cover rounded-md"
                            />
                            <div className="mt-3">
                                <h1 className="text-lg font-medium">
                                    Where we take our ingredients & how we
                                    prepare to cook
                                </h1>
                                <p className="text-gray-700 mt-2 text-sm">
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Optio, modi accusamus
                                    ratione dolorem inventore sapiente?
                                </p>
                                <div className="flex gap-5 mt-4">
                                    <div className="flex gap-1 items-center text-sm">
                                        <CalendarFold
                                            size={16}
                                            className="text-gray-800"
                                        />
                                        <p className="text-gray-800">
                                            20 Jan 2025
                                        </p>
                                    </div>
                                    <div className="flex gap-1 items-center text-sm">
                                        <Clock
                                            size={16}
                                            className="text-gray-800"
                                        />
                                        <p className="text-gray-800">
                                            3 mins read
                                        </p>
                                    </div>
                                </div>
                                <Link to="/blog">
                                    <button className="text-accentRed hover:text-hoverRed duration-300 flex gap-1 items-center mt-4">
                                        Read More{" "}
                                        <ArrowRight
                                            size={16}
                                            className=" -mb-1"
                                        />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
