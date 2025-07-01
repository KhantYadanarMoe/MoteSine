import { Button } from "@/Components/ui/button";
import Arrow from "../../../images/arrow.png";
import Hero1 from "../../../images/hero-delivery.jpg";
import Hero2 from "../../../images/hero-restaurant.jpg";
import Hero3 from "../../../images/hero-food.jpg";
import Flag from "../../../images/flag.jpg";
import Spark from "../../../images/Spark.png";
import HeroBg from "../../../images/hero-bg.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useSetting } from "@/contexts/HeroSettingContext";

const Hero = () => {
    const { form } = useSetting();
    const heroImages = Array.isArray(form.heroImg)
        ? form.heroImg
        : JSON.parse(form.heroImg || "[]");

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
        >
            <div className="relative mb-6 py-6 md:py-4 lg:py-8 px-3 md:px-6 lg:px-12">
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

                <div className="flex flex-col md:flex-row items-center justify-center gap-5 lg:gap-8 relative z-10">
                    <div className="md:w-1/2 px-3 md:px-0 lg:px-6 md:text-left">
                        <h1 className="text-[3rem] md:text-[3.8rem] lg:text-[4.2rem] mb-4 leading-tight">
                            {form.header}
                        </h1>
                        <p className="text-gray-700 text-xs md:text-sm lg:text-base mb-6">
                            {form.body}
                        </p>
                        <div className="flex gap-2 md:justify-start">
                            <Link to="/reservation">
                                <Button
                                    variant="default"
                                    className="rounded-lg bg-accentRed text-white hover:bg-hoverRed duration-300"
                                >
                                    Reserve a table
                                </Button>
                            </Link>
                            <Link to="/menu">
                                <Button
                                    variant="outline"
                                    className="rounded-lg border border-accentRed text-accentRed hover:border-hoverRed hover:text-hoverRed hover:bg-gray-100 duration-300"
                                >
                                    Order Online
                                </Button>
                            </Link>
                            <img
                                src={Arrow}
                                alt="Arrow"
                                className="w-20 rounded-lg overflow-hidden"
                            />
                        </div>
                    </div>

                    <div className="md:w-1/2 px-0 flex flex-col gap-4 lg:gap-6">
                        <div className="flex gap-1 md:gap-4 lg:gap-4 justify-center">
                            <div>
                                <div className="flex gap-1">
                                    <img
                                        src={Flag}
                                        alt="Flag"
                                        className="h-7 md:h-6 lg:h-8 object-cover rounded-md transform rotate-6 mt-6 mr-2 ml-3"
                                    />
                                    <img
                                        src={Spark}
                                        alt="Spark"
                                        className="h-24 md:h-20 lg:h-24 object-cover rounded-lg"
                                    />
                                </div>
                                {heroImages[0] && (
                                    <img
                                        src={`/storage/${heroImages[0]}`}
                                        alt="Hero 1"
                                        className="w-32 h-32 lg:h-40 lg:w-40 object-cover mt-3 rounded-lg shadow-[8px_8px_0_rgba(246,197,0,0.9)]"
                                    />
                                )}
                            </div>
                            <div>
                                {heroImages[1] && (
                                    <img
                                        src={`/storage/${heroImages[1]}`}
                                        alt="Hero 2"
                                        className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mb-4 md:mb-5 object-cover rounded-lg shadow-[8px_8px_0_rgba(50,172,49,0.9)]"
                                    />
                                )}
                                {heroImages[2] && (
                                    <img
                                        src={`/storage/${heroImages[2]}`}
                                        alt="Hero 3"
                                        className="w-24 h-24 lg:w-32 lg:h-32 object-cover rounded-lg shadow-[8px_8px_0_rgba(233,41,62,0.9)]"
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Hero;
