import Story from "../../../images/story.jpg";
import Home2 from "../../../images/Home-2.jpg";
import smell from "../../../images/smell.jpg";
import { motion } from "framer-motion";

export default function () {
    return (
        <motion.div
            className="w-[96%] lg:w-[90%] mx-auto block md:flex items-center gap-2 px-3 py-6 my-3"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            id="Aim"
        >
            <div className="w-full md:w-1/2 mb-5 md:mb-0">
                <div>
                    <h2 className="text-2xl font-semibold mb-1 relative inline-block">
                        What We Aim For
                    </h2>
                    <div className="flex items-center">
                        <div className="w-28 h-[2px] bg-accentRed"></div>
                        <div className="w-1 h-1 bg-accentRed rounded-full ml-2"></div>
                    </div>
                </div>
                <span className="text-gray-900 text-sm lg:text-base">
                    <p className="block mt-4 lg:mt-6">
                        To those who miss home and crave the familiar flavors of
                        Burma, we understand your longing. Every meal should be
                        a journey back to the comforting tastes of your
                        childhood, even when you’re far away.
                    </p>
                    <p className="block mt-3">
                        We proudly serve authentic Burmese cuisine in a stylish
                        setting. Each dish is carefully made with fresh
                        ingredients and traditional recipes, creating a dining
                        experience you won’t forget.
                    </p>
                    <p className="block mt-3">
                        Come and enjoy the tasty flavors and inviting smells
                        that remind you of Burma, making every visit
                        unforgettable..
                    </p>
                </span>
            </div>
            <div className="w-full md:w-1/2 pr-0 md:pr-3 order-2 md:order-1">
                <div className="flex gap-2 justify-center">
                    <img
                        src={Home2}
                        alt=""
                        className="w-1/2 h-[300px] md:w-[170px] md:h-[280px] lg:w-[200px] lg:h-[330px] object-cover mt-8 rounded-md"
                    />
                    <div className="flex flex-col gap-2 w-1/2 md:w-auto">
                        <img
                            src={Story}
                            alt=""
                            className="w-full h-[150px] md:w-[150px] md:h-[140px] lg:w-[180px] lg:h-[165px] object-cover rounded-md"
                        />
                        <img
                            src={smell}
                            alt=""
                            className="w-full h-[150px] md:w-[150px] md:h-[140px] lg:w-[180px] lg:h-[165px] object-cover rounded-md"
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
