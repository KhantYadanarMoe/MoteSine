import Blog from "../../../images/cooking.jpg";
import { CalendarFold, Clock, ArrowRight, Search } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function LatestBlog() {
    return (
        <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
        >
            <div className="block md:flex gap-3 lg:gap-0 my-6">
                <div className="md:w-1/2">
                    <img
                        src={Blog}
                        alt=""
                        className="w-[100%] lg:w-[90%] mx-auto h-52 md:h-64 lg:h-80 object-cover rounded-sm"
                    />
                </div>
                <div className="md:w-1/2 flex flex-col justify-end py-3">
                    <h1 className="text-xl lg:text-2xl font-medium mb-3">
                        How we choose and cook our daily's special menu
                    </h1>
                    <p className="text-gray-700 text-xs lg:text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sed dolores, similique hic est atque porro iste
                        explicabo corrupti esse sint quibusdam numquam? Iste
                        quo, ex veniam velit in exercitationem saepe.
                    </p>
                    <div className="flex gap-5 mt-4">
                        <div className="flex gap-1 items-center text-sm lg:text-base">
                            <CalendarFold size={20} className="text-gray-800" />
                            <p className="text-gray-800">20 Jan 2025</p>
                        </div>
                        <div className="flex gap-1 items-center text-sm lg:text-base">
                            <Clock size={20} className="text-gray-800" />
                            <p className="text-gray-800">3 mins read</p>
                        </div>
                    </div>
                    <Link to="/blog">
                        <button className="text-accentRed bg-white shadow-none hover:text-hoverRed duration-300 flex gap-1 items-center mt-4">
                            Read More{" "}
                            <ArrowRight size={16} className=" -mb-1" />
                        </button>
                    </Link>
                </div>
            </div>
            <hr className="border-t-gray-400" />
        </motion.div>
    );
}
