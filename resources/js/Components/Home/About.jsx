import React from "react";
import Cooking from "../../../images/Cooking.jpg";
import Vegetables from "../../../images/Vegetables.jpg";
import Plating from "../../../images/plating.jpg";
import HeroBg from "../../../images/hero-bg.jpg";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function About() {
    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
        >
            <div className="relative block md:flex gap-3 items-center py-24">
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
                <div className="flex gap-1 items-center justify-center w-full md:w-1/2 mb-4 md:mb-0 px-2">
                    <img
                        src={Vegetables}
                        alt=""
                        className="w-[100px] h-[140px] md:w-[115px] md:[160px] lg::w-[150px] lg::h-[190px] object-cover"
                    />
                    <img
                        src={Cooking}
                        alt=""
                        className="w-[120px] h-[170px] md:w-[130px] md:h-[180px] lg:w-[180px] lg:h-[230px] object-cover"
                    />
                    <img
                        src={Plating}
                        alt=""
                        className="w-[100px] h-[140px] md:w-[115px] md:[160px] lg::w-[150px] lg::h-[190px] object-cover"
                    />
                </div>
                <div className="w-full md:w-1/2 px-4 md:px-8">
                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-1 relative inline-block">
                            What We Do?
                        </h2>
                        <div className="flex items-center">
                            <div className="w-28 h-[2px] bg-accentRed"></div>
                            <div className="w-1 h-1 bg-accentRed rounded-full ml-2"></div>
                        </div>
                    </div>

                    <p className="text-gray-950 text-xs md:text-sm mb-6 w-full lg:w-[90%]">
                        We offer an authentic taste of Burmese cuisine to your
                        tongue. Our menu features a delightful selection of
                        traditional dishes, crafted with the freshest
                        ingredients to bring the flavors of Myanmar to your
                        home. You can also taste the authentic tradition food in
                        fine dining ways. We provide you not only to taste at
                        your home but also to have memorable eat-out.
                    </p>
                    <Link to="/about">
                        <Button
                            variant="default"
                            className="rounded-lg bg-accentRed text-white hover:bg-hoverRed duration-300"
                        >
                            Read more about us
                        </Button>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}
