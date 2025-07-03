import Plating from "../../../images/plating-1.jpg";
import Community from "../../../images/community.jpg";
import Home from "../../../images/home.jpg";
import { motion } from "framer-motion";

export default function () {
    return (
        <motion.div
            className="w-[96%] lg:w-[90%] mx-auto flex flex-col md:flex-row items-center gap-4 px-3 py-6 my-3"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            id="Exist"
        >
            <div className="w-full md:w-1/2 pr-0 md:pr-3 order-2 md:order-1">
                <div className="flex gap-2 justify-center">
                    <img
                        src={Home}
                        alt=""
                        className="w-1/2 h-[300px] md:w-[170px] md:h-[280px] lg:w-[200px] lg:h-[330px] object-cover mt-8 rounded-md"
                    />
                    <div className="flex flex-col gap-2 w-1/2 md:w-auto">
                        <img
                            src={Plating}
                            alt=""
                            className="w-full h-[150px] md:w-[150px] md:h-[140px] lg:w-[180px] lg:h-[165px] object-cover rounded-md"
                        />
                        <img
                            src={Community}
                            alt=""
                            className="w-full h-[150px] md:w-[150px] md:h-[140px] lg:w-[180px] lg:h-[165px] object-cover rounded-md"
                        />
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/2 mb-5 md:mb-0 order-1 md:order-2">
                <div>
                    <h2 className="text-2xl font-semibold mb-1 relative inline-block">
                        Why We Exist
                    </h2>
                    <div className="flex items-center">
                        <div className="w-28 h-[2px] bg-accentRed"></div>
                        <div className="w-1 h-1 bg-accentRed rounded-full ml-2"></div>
                    </div>
                </div>
                <span className="text-gray-900 text-sm lg:text-base">
                    <p className="block mt-4 lg:mt-6">
                        <p className="text-lg font-medium mb-1">
                            01. Showcase the Flavors of Burma
                        </p>
                        We aim to introduce the unique and delicious tastes of
                        Burmese cuisine to everyone, making it loved worldwide.
                    </p>
                    <p className="block mt-4 lg:mt-6">
                        <p className="lg:text-lg font-medium mb-1">
                            02. Create a Community
                        </p>
                        Our goal is to bring people together through food,
                        fostering connections and a sense of belonging.
                    </p>
                    <p className="block mt-4 lg:mt-6">
                        <p className="text-lg font-medium mb-1">
                            03. Bring the Taste of Home
                        </p>
                        For those missing home, we offer authentic dishes that
                        create a home away from home, bringing comfort and
                        familiar flavors.
                    </p>
                </span>
            </div>
        </motion.div>
    );
}
